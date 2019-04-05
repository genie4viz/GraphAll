// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang='nl'>
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <link rel="shortcut icon" href="/static/veb.png" />
        <link rel="stylesheet" href="/static/css/font-awesome.min.css"/>
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
      </html>
    )
  }
}

export default MyDocument