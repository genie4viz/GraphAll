import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';


class UserMenu extends React.Component {
  render() {
    const { session } = this.props;

    if (session && session.user) {
      return (
        <ul className="list-inline">
          <li>
            <Link href="/profile">
              <a>
                <b>{session.user.name || session.user.email}</b>
              </a>
            </Link>
          </li>
          <li>
            <form id="signout" method="post" action="/auth/signout" onSubmit={this.handleSignoutSubmit}>
              <input name="_csrf" type="hidden" value={session.csrfToken} />
              <button className="button is-text" type="submit" style={{ textDecoration: 'none' }}>
                Uitloggen
              </button>
            </form>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="list-inline">
          <li>
            <button className="button is-text" style={{ textDecoration: 'none' }} onClick={() => {}}>
              Inloggen
            </button>
          </li>
          <li>
            <a href="https://login.veb.net/identity/createuseraccount" className="button is-danger">
              Word nu lid!
            </a>
          </li>
        </ul>
      );
    }
  }
}

// UserMenu.propTypes = {
//   session: PropTypes.object.isRequired
// };

export default UserMenu;
