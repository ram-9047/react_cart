import React from "react";
export default function Cartpage(props) {
  return (
    <>
      <h3>cart page</h3>
      <ul>
        {props.items.map(item => (
          <li>
            {item.title}
            {item.price}
          </li>
        ))}
      </ul>
      <hr />
      <h3>Total: {props.items.reduce((acc, item) => acc + item.price, 0)}</h3>
    </>
  );
}
