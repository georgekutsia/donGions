import { createContext, useState } from "react";
import React, { Component }  from 'react';
export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [pj, setPj] = useState(JSON.parse(localStorage.getItem("pj"))); 

  function login(pj){
    setPj(pj);
    localStorage.setItem("pj", JSON.stringify(pj))
  }

  const value = {
    pj,
    setPj: login,
  }
// se usa el hook de useContext para luego llamarlo en los hijos o nietos

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
