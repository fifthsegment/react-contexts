import React from 'react';
import AppContext from '../contexts/appcontext';

class DataTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { search } = this.context;
    return (
      <div>
        <div>
          {search && search.length > 0 ? 'Search Value : ' + search : ''}
        </div>
      </div>
    );
  }
}
DataTable.contextType = AppContext;

export default DataTable;
