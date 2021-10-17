import React from 'react';
import SearchBar from './components/SearchBar';
import DataTable from './components/DataTable';
import ApplicationSearchContextComponent from './components/ApplicationSearchContextComponent';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ApplicationSearchContextComponent>
        <h1>Context</h1>
        <p>Value being passed into the ApplicationContext by the SearchBar</p>
        <SearchBar />
        <DataTable />
      </ApplicationSearchContextComponent>
    );
  }
}

export default App;
