import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

import UserMenu from './UserMenu';

const Header = ({ router: { pathname }, session, signinBtn }) => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <a>
          <img src="/static/logo.png" alt="" className="logo" width="170" />
        </a>
        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-center">
          <div className="navbar-item">
            <div className="field has-addons">
              <div className="control input-wrap">
                <input
                  type="text"
                  className="input search-field ng-pristine ng-valid"
                  placeholder="Zoek naar nieuws, aandelen of een specifiek dossier"
                />
                <div className="navbar-dropdown is-boxed navbar-search fz-12 search-result-box ng-hide" />
              </div>
              <div className="control">
                <button className="button is-dark">
                  <img src="/static/svg/search.svg" alt="" width="16" height="16" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-2">
          <div className="navbar-item">
            <ul className="list-contacts fz-12">
              <li>
                <img src="/static/svg/icon-phone.svg" alt="" width="20" />
                <a href="tel:070-313 00 00">070-313 00 00</a>
              </li>
              <li>
                <img src="/static/svg/icon-mail.svg" alt="" width="17" />
                <a href="mailto:info@veb.net" className="underline">
                  info@veb.net
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-start">
          <a href="#!" className="navbar-item is-active">
            Home
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a href="#!" className="navbar-link">
              VEB-acties
            </a>
            <div className="navbar-dropdown is-boxed">
              <a href="#!" className="navbar-item">
                Overview
              </a>
              <a href="#!" className="navbar-item">
                Modifiers
              </a>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <a href="#!" className="navbar-link">
              Beurs
            </a>
            <div className="navbar-dropdown is-boxed">
              <a href="#!" className="navbar-item">
                Overview
              </a>
              <a href="#!" className="navbar-item">
                Modifiers
              </a>
            </div>
          </div>
          <a href="#!" className="navbar-item">
            Begin met beleggen
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a href="#!" className="navbar-link">
              Dossiers
            </a>
            <div className="navbar-dropdown is-boxed">
              <a href="#!" className="navbar-item">
                Overview
              </a>
              <a href="#!" className="navbar-item">
                Modifiers
              </a>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <a href="#!" className="navbar-link">
              Tools
            </a>
            <div className="navbar-dropdown is-boxed">
              <a href="#!" className="navbar-item">
                Overview
              </a>
              <a href="#!" className="navbar-item">
                Modifiers
              </a>
            </div>
          </div>
          <a href="#!" className="navbar-item">
            Voor Professionals
          </a>
          <a href="#!" className="navbar-item">
            Over de VEB
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <UserMenu session={session} signinBtn={signinBtn} />
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default withRouter(Header);
