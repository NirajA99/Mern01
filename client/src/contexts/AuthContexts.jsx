import React, { createContext, useState, useContext} from 'react';


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const setUser = (user) => {
    // Store user data in local storage
    localStorage.setItem('user', JSON.stringify(user));
    setActiveUser(user);
  };

  const clearUser = () => {
    // Remove user data from local storage
    localStorage.removeItem('user');
    setActiveUser(null);
  };

  return (
    <AuthContext.Provider value={{ activeUser, setActiveUser , setUser , clearUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider; 