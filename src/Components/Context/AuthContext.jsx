// import { createContext, useState } from "react";

// export const AppContext = createContext();

// function AuthContextProvider({ children }) {
// const [isAuth, setIsAuth] = useState()

// const handleAuth=()=>{
//     setIsAuth()
// }

//   return <AppContext.Provider value={{isAuth, handleAuth}}>{children}</AppContext.Provider>;
// }
// export default AuthContextProvider;

import { createContext } from "react";
import { useState } from "react";
import React from "react";
export const AppContext = createContext();
function AuthContextProvider({ children }) {
  const [isAuth, setAuth] = useState(false); //set it false
  const [token, setToken] = useState("");
  const toggleAuth = () => {
    return setAuth(isAuth ? false : true);
  };
  return (
    <AppContext.Provider
      value={{
        isAuth,
        toggleAuth,
        token,
        setToken,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export default AuthContextProvider;
