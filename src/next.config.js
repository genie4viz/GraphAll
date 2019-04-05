const withSass = require('@zeit/next-sass');

module.exports = withSass({
	
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'mySecret'
  },
  publicRuntimeConfig: {
    noSecret: 'noSecret'
  },
  webpack: function(cfg) {
    const originalEntry = cfg.entry;
    cfg.entry = async () => {
      const entries = await originalEntry();

      if (entries['main.js'] && !entries['main.js'].includes('./util/polyfills.js')) {
        entries['main.js'].unshift('./util/polyfills.js');
      }

      return entries;
    };

    return cfg;
  }
});
