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
      img: "https://i.pinimg.com/564x/00/db/fd/00dbfd3737555e058ee3c2d02bdfed24.jpg",
      brand: "Addidas",
      price: "$ 250.00",
      detial: "No comments yet! Add one to start the conversation.",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/564x/00/db/fd/00dbfd3737555e058ee3c2d02bdfed24.jpg",
      brand: "Addidas",
      price: "$ 250.00",
      detial: "No comments yet! Add one to start the conversation.",
    },
    {
      id: 4,
      img: "https://i.pinimg.com/564x/00/db/fd/00dbfd3737555e058ee3c2d02bdfed24.jpg",
      brand: "Addidas",
      price: "$ 250.00",
      detial: "No comments yet! Add one to start the conversation.",
    },
  ];
  return (
    <React.Fragment>
      {shoe.map((n) => {
        const { img, brand, price, detail } = n;
        return (
          <Card
            key={n.id}
            img={img}
            brand={brand}
            price={price}
            detail={detail}
          />
        );
      })}
    </React.Fragment>
  );
}

export default Product;
