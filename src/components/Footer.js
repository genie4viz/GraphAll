import React from 'react'

export default () => (
  <footer className="page-footer fz-14" style={{ marginTop: '20px' }}>
    <div className="footer-top bg-gray">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">
            <a href="/" className="footer-logo">
              <img src="/static/logo-white.png" alt="" width="116" />
            </a>
            <ul>
              <li>
                <a href="/lidmaatschap/veel-gestelde-vragen-veb-lidmaatschap">FAQ</a>
              </li>
              <li>
                <a href="/acties-menu/actieoverzichtspagina">Juridische acties</a>
              </li>
              <li>
                <a href="/standaardcontent/privacy-statement">Privacy Statement</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <ul>
              <li>
                <a href="/lidmaatschap/soorten-lidmaatschappen-veb">Lid worden</a>
              </li>
              <li>
                <a href="/adverteren">Adverteren</a>
              </li>
              <li>
                <a href="/standaardcontent/disclaimer">Disclaimer</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <div className="has-text-weight-bold is-uppercase fz-17">CONTACT</div>
            <div className="p-no-margin">
              <p>
                Tel: <span>070-313 00 00</span>
                <br />Email: info@veb.net
              </p>
            </div>
          </div>
          <div className="column">
            <div className="p-no-margin" />
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom bg-red">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">© 2019 - Vereniging van Effectenbezitters</div>
          <div className="column is-narrow">
            <ul className="list-inline" />
          </div>
        </div>
      </div>
    </div>
  </footer>
)
