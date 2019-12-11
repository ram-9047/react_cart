import React from "react";
export default function Cartpage(props) {
  return (
    <>
      <h3 className="carttitle">cart page</h3>
      <ul>
        {props.items.map(item => (
          <li className="add-item flex">
            <li>{item.title}</li>
            <li>{item.price}</li>
          </li>
          // <li className="add-item">
          //   {item.title}
          //   {item.price}
          // </li>
        ))}
      </ul>
      {/* <hr /> */}
      <h3 className="total">
        Total: {props.items.reduce((acc, item) => acc + item.price, 0)}
      </h3>
    </>
  );
}
