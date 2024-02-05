import React from "react";
const name = [
  { name: "sochoeun", sex: "male" },
  { name: "sochoeun", sex: "male" },
  { name: "sochoeun", sex: "male" },
  { name: "sochoeun", sex: "male" },
];

const User = () => {
  return (
    <div>
      {name.map((n) => (
        <h2>{n.name}</h2>
      ))}
    </div>
  );
};

export default User;
