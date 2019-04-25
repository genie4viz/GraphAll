import React, { Component } from 'react';

let AppContext;

const { Provider, Consumer } = (AppContext = React.createContext());

/* Then create a provider Component */
class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      securityFilterText: '',
      setSecurityFilterText: this.setSecurityFilterText,
      securityFilterYear: 2019,
      setSecurityFilterYear: this.setSecurityFilterYear,
      navMenu: true,
      turnOffNavMenu: this.turnOffNavMenu,
      turnOnNavMenu: this.turnOnNavMenu
    };
  }

  turnOffNavMenu = () => {
    this.setState({
      navMenu: false
    });
  };

  turnOnNavMenu = () => {
    this.setState({
      navMenu: true
    });
  };

  setSecurityFilterText = filter => {
    this.setState({ securityFilterText: filter });
  };

  setSecurityFilterYear = year => {
    this.setState({ securityFilterYear: year });
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default AppContext;
export { AppProvider, Consumer as AppConsumer };
