import React from "react";

export default function Checkout() {
  return (
    <>
      <h4>Checkout</h4>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
