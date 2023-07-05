import { createContext, useState } from "react";

export const UserContext = createContext({});
const [userDetails, setUserDetails] = useState({})

 export const UserContextProvider = ({ children }) => {
  return <UserContext.Provider value={{ userDetails, setUserDetails }} >{children}</UserContext.Provider>;
};


