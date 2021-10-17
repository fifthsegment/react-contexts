import React from 'react';
import AppContext from '../contexts/appcontext';

class ApplicationContext extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchUpdate = (update) => {
      this.setState({ search: update });
    };

    this.state = {
      search: '',
      onUpdate: this.onSearchUpdate,
    };
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default ApplicationContext;
