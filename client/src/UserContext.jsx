/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    console.log("user");
    if (!user) {
      console.log("check");
      axios.get("/profile").then(({ data }) => {
        console.log(data);
        setUser(data);
        setReady(true);
      });
    } else {
      console.log("user");
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}
