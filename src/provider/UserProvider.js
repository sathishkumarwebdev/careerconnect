import { useState, createContext } from "react";

export const UserContext = createContext(null);
export function UserProvider(props) {
  const [userData, setUserData] = useState([]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {props.children}
    </UserContext.Provider>
  );
}
