import React from "react";

export default function Header(props) {
  return (
    <header className="flex header ">
      <div className="title" onClick={() => props.page("products")}>
        Cart
      </div>
      <div onClick={() => props.page("cart")}>
        <span className="item">{props.cart}</span>
      </div>
    </header>
  );
}
