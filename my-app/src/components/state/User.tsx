import { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};
export const User = () => {
  //   const [user, setUser] = useState<AuthUser | null>(null);
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "Sengvon",
      email: "sengvon@gmail.com",
    });
  };
  //   const handleLogout = () => {
  //     setUser(null);
  //   };
  //-------------------------------->
  const style = {
    backgroundColor: "red",
    color: "white",
    padding: "5px 10px",
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    margin: "5px",
    cursor: "pointer",
  };

  //-------------------------------->

  return (
    <>
      <button style={style} onClick={handleLogin}>
        Login
      </button>
      {/* <button style={style} onClick={handleLogout}>
        Logout
      </button> */}
      <h1>This is User Name {user.name} </h1>
      <h1>This is User Email {user.email}</h1>
    </>
  );
};
