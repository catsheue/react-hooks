import React from "react";
import Login from "./Login";
import Register from "./Register";

export default function UserBar() {
  const user = "";
  if (user) {
    return <Login />;
  } else {
    return (
      <>
        <Login />
        <Register />
      </>
    );
  }
}
