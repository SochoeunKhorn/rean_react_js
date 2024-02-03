import React from "react";
import Poster from "./Poster";
import sochoeun from "../assets/images/sochoeun.jpg";
import both from "../assets/images/both.jpg";
import hong from "../assets/images/hong.jpg";
import liheang from "../assets/images/liheang.jpg";
import nang from "../assets/images/nang.jpg";
import soty from "../assets/images/soty.jpg";

function GroupPoster() {
  return (
    <>
      <Poster imgSrc={sochoeun} name="Sochoeun Khorn" major="Mobile Developer">
        <button>Moew</button>
      </Poster>
      <Poster imgSrc={both} name="Rin SotheaBoth" major="Manager">
        <button>Moew</button>
      </Poster>
      <Poster imgSrc={hong} name="Yeang Kimhong" major="Engineer" />
      <Poster imgSrc={liheang} name="Ly Liheang" major="Data Analysis" />
      <Poster imgSrc={nang} name="Heng Somnang" major="Web Developer" />
      <Poster imgSrc={soty} name="Ang Soty" major="Information Security" />
    </>
  );
}

export default GroupPoster;
