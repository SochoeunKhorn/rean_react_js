import React from "react";
const name = [
  { name: "sochoeun", sex: "male" },
  { name: "sochoeun", sex: "male" },
  { name: "sochoeun", sex: "male" },
  { name: "sochoeun", sex: "male" },
];
const userName = name.map((n) => <h3>{n.name}</h3>);
const User = () => {
  return <div>{userName}</div>;
};

export default User;
