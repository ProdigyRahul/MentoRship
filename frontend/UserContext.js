import { createContext, useState } from "react";

const UserType = createContext();

const UserContext = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [sessionId, setSessionId] = useState("");

  return (
    <UserType.Provider value={{ userId, setUserId, sessionId, setSessionId }}>
      {children}
    </UserType.Provider>
  );
};

export { UserType, UserContext };
