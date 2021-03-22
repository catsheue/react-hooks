import React from "react";

export default function Logout({ user }) {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      Logged in as: <b>{user}</b>
      <input type="submit" value="Logout" />
    </form>
  );
}
