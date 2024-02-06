import React from "react";
import Card from "./Card";

function Product() {
  const shoe = [
    {
      id: 1,
      img: "https://i.pinimg.com/564x/00/db/fd/00dbfd3737555e058ee3c2d02bdfed24.jpg",
      brand: "Addidas",
      price: "$ 250.00",
      detial: "No comments yet! Add one to start the conversation.",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/564x/1f/9d/ca/1f9dcac4e16c4b2582b43f70cfb0f630.jpg",
      brand: "Nike",
      price: "$ 250.00",
      detial: "No comments yet! Add one to start the conversation.",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/564x/10/42/0c/10420c006334ab25ac01e6fd038c2c46.jpg  ",
      brand: "Addidas",
      price: "$ 250.00",
      detial: "No comments yet! Add one to start the conversation.",
    },
    {
      id: 4,
      img: "https://i.pinimg.com/564x/42/54/cf/4254cf545f22b6525d335ff11e45a723.jpg",
      brand: "Nike",
      price: "$ 250.00",
      detial: "No comments yet! Add one to start the conversation.",
    },
  ];

  return (
    <React.Fragment>
      {shoe.map((p) => {
        return <Card product={p} key={p.id} />;
      })}
    </React.Fragment>
  );
}

export default Product;
