// Polyfill Node with `Intl` that has data for all locales.
// See: https://formatjs.io/guides/runtime-environments/#server
const IntlPolyfill = require('intl');
Intl.NumberFormat = IntlPolyfill.NumberFormat;
Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;

const express = require('express');

const next = require('next');
const routes = require('./routes');

const glob = require('glob');
const accepts = require('accepts');
const { readFileSync } = require('fs');
const { basename } = require('path');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);

// Get the supported languages by looking for translations in the `lang/` dir.
const supportedLanguages = glob.sync('./lang/*.json').map(f => basename(f, '.json'));

// We need to expose React Intl's locale data on the request for the user's
// locale. This function will also cache the scripts by lang in memory.
const localeDataCache = new Map();
const getLocaleDataScript = locale => {
  const lang = locale.split('-')[0];
  if (!localeDataCache.has(lang)) {
    const localeDataFile = require.resolve(`react-intl/locale-data/${lang}`);
    const localeDataScript = readFileSync(localeDataFile, 'utf8');
    localeDataCache.set(lang, localeDataScript);
  }
  return localeDataCache.get(lang);
};

app.prepare().then(() => {
  const server = express();
  if (!dev) {
    server.set('trust proxy', 1);
  }

  server.all('/_next/*', (req, res) => {
    let nextRequestHandler = app.getRequestHandler();
    return nextRequestHandler(req, res);
  });

  server.use((req, res, next) => {
    const accept = accepts(req);
    const locale = accept.language(accept.languages(supportedLanguages)) || 'nl';
    req.locale = locale;
    req.localeDataScript = getLocaleDataScript(locale);
    next();
    //req.messages = dev ? {} : getMessages(locale)
    //handle(req, res)
  });

  server.get('*', (req, res) => handler(req, res));

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
