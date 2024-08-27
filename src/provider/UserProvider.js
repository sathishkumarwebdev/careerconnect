import { useState, createContext } from "react";

export const UserContext = createContext(null);
export function DataProvider(props) {
  const [userData, setuserData] = useState("");
 
  return (
    <UserContext.Provider value={{userData,setuserData}}>
            {props.children}
    </UserContext.Provider>
   
  );
}
