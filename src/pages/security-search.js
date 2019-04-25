import React, { Component } from 'react';
import LayoutBasic from '../components/LayoutBasic';
import SecuritySearch from '../components/SecuritySearch';

class SecuritySearchPage extends Component {

  render() {

    const { session, navMenu } = this.props;

    return (
      <LayoutBasic
        {...this.props}
        title={`Stocks`}
        description={`Stocks`}
        session={session}
        navMenu={true}
        signinBtn={true}
      >
        <SecuritySearch />
      </LayoutBasic>
    );
  }
}

export default SecuritySearchPage;
