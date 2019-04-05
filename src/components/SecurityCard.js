import React from 'react';

import CircularGraph from './CircularGraph';
const SecurityCard = ({ security }) => {
  return (
    <div className="column is-4">
      <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <header className="card-header" style={{ flexGrow: 1 }}>
          <p className="card-header-title">
            <span>Security Name</span>
          </p>
        </header>

        <div className="card-content has-text-centered">
          <CircularGraph security={security} />
        </div>
        <footer className="card-footer" style={{ marginTop: 'auto' }}>
          <a className="card-footer-item">View</a>
          {security.isIdea ? (
            <a className="card-footer-item">Remove</a>
          ) : (
            <a className="card-footer-item">Add to portfolio</a>
          )}
        </footer>
      </div>
    </div>
  );
};

export default React.memo(SecurityCard);
