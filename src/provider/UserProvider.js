import { useState, createContext } from "react";

export const UserContext = createContext(null);
export function UserProvider(props) {
  const [userData, setuserData] = useState("");

  return (
    <UserContext.Provider value={{ userData, setuserData }}>
      {props.children}
    </UserContext.Provider>
  );
}
