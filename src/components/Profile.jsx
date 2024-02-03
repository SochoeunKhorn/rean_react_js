import React from "react";
import Author from "./Author";
import Message from "./Message";
import Image from "./Image";

function Profile() {
  return (
    <article>
      <Author />
      <Message />
      <Image />
    </article>
  );
}

export default Profile;
