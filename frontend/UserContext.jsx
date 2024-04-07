import React from 'react';

// Create a context with default value
const UserContext = React.createContext({
  currentloginID: '',
  setcurrentloginID: () => {},
});

export default UserContext;
