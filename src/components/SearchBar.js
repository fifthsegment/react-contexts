import React from 'react';
import AppContext from '../contexts/appcontext';

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
        <AppContext.Consumer>
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
        </AppContext.Consumer>
      </div>
    );
  }
}

export default SearchBar;
