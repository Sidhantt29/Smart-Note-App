import { createContext, useState } from "react";

export const AppContext = createContext();


export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (name) => {
    setUser(name);
  }
  const logout = () => {
    setUser(null);
  }
  
  return <AppContext.Provider value={{user,login,logout}}>{children}</AppContext.Provider>;
};
