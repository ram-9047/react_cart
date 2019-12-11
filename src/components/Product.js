import React from "react";

export default function Product(props) {
  return (
    <div>
      <li className="flex">
        <h3>{props.title}</h3>
        <span className="price">${props.price}</span>
        <button
          className="btn"
          onClick={() =>
            props.cart({
              id: props.id,
              title: props.title,
              price: props.price
            })
          }
        >
          Add To Cart
        </button>
      </li>
    </div>
  );
}
