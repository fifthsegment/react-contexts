import React from 'react';
import AppSearchContext from '../contexts/AppSearchContext';

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
      <AppSearchContext.Provider value={this.state}>
        {this.props.children}
      </AppSearchContext.Provider>
    );
  }
}

export default ApplicationContext;
