import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => {
  return (
    <div className="columns is-mobile" style={{ justifyContent: 'center' }}>
      <FontAwesomeIcon icon="spinner" spin data-testid="spinner" />
    </div>
  );
};
