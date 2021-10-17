import React from 'react';
import AppSearchContext from '../contexts/AppSearchContext';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  onSearchValChange(value) {
    this.props.onUpdate(value);
  }
  render() {
    return (
      <div>
        <AppSearchContext.Consumer>
          {({ _, onUpdate }) => {
            return (
              <div>
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => onUpdate(e.target.value)}
                />
              </div>
            );
          }}
        </AppSearchContext.Consumer>
      </div>
    );
  }
}

export default SearchBar;
