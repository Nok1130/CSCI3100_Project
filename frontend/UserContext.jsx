import React from 'react';
import { create } from "zustand";

// Create a context with default value
const UserContext = React.createContext({
  currentloginID: '',
  setcurrentloginID: () => {},
});

export default UserContext;
