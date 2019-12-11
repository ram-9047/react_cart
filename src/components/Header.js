import React from "react";

export default function Header(props) {
  return (
    <header className="flex ">
      <div className="title" onClick={() => props.page("products")}>
        Cart
      </div>
      <div onClick={() => props.page("cart")}>
        <span>{props.cart}</span>
      </div>
    </header>
  );
}
