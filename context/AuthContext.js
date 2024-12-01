'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
   
    if (userInfo) setUserInfo(JSON.parse(userInfo));
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) setAuthToken(token);
  }, []);

  const saveAuthToken = (token) => {
    setAuthToken(token);
    localStorage.setItem('authToken', token);
  };

  const saveUserInfo = (first_name,last_name) => {

     const userInfo = { first_name, last_name };
     localStorage.setItem('userInfo', JSON.stringify(userInfo));

  };

  const logout = () => {
    setAuthToken(null);
    setUserInfo({});
    localStorage.removeItem('authToken');
    localStorage.removeItem('userInfo');

  };

  return (
    <AuthContext.Provider value={{ authToken, saveAuthToken, logout,saveUserInfo,userInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
