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
      securityFilterYear: 2018,
      setSecurityFilterYear: this.setSecurityFilterYear,
      showCase: [true, true, true, true, true],
      setShowCase: this.setShowCase,
      securityFilterSectors: ['Finance','ConsumerServices'],
      setSecurityFilterSectors: this.setSecurityFilterSectors,
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

  setShowCase = showCase => {
    this.setState({ showCase });
  };

  setSecurityFilterSectors = newSectorSelection =>{
    this.setState({securityFilterSectors: newSectorSelection})
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default AppContext;
export { AppProvider, Consumer as AppConsumer };
