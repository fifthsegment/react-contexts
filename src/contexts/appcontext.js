import React from 'react';

const AppContext = React.createContext({
  search: '',
  setState: () => {},
});

export default AppContext;
