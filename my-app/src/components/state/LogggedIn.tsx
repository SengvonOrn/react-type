import { useState } from "react";
export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const hanleLogout = () => {
    setIsLoggedIn(false);
  };
  // ---------------------------->
  const style = {
    backgroundColor: "blue",
    color: "white",
    padding: "5px 10px",
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    margin: "5px",
    cursor: "pointer",
  };

  // ---------------------------->
  return (
    <>
      <button style={style} onClick={handleLogin}>
        Login
      </button>
      <button style={style} onClick={hanleLogout}>
        Logout
      </button>
      <div style={{ fontSize: "22px" }}>
        User is {isLoggedIn ? "login" : "Logout"}
      </div>
    </>
  );
};
