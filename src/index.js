import React from "react";
import { render } from "react-dom";

import data from "../src/data.json";
import Product from "./components/Product";
import Header from "./components/Header";
import Cartpage from "./components/Cartpage";
import Checkout from "./components/Checkout";
import "./style/main.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cart: [], activePage: "products" };
  }

  handleAddToCart = singleProduct => {
    const newCart = this.state.cart.concat(singleProduct);
    console.log(newCart);
    this.setState({
      cart: newCart
    });
  };

  handlePage = a => {
    this.setState({
      activePage: a
    });
  };

  switchPage = () => {
    switch (this.state.activePage) {
      case "products":
        return (
          <>
            <ul>
              {data.products.map(product => (
                <Product {...product} cart={this.handleAddToCart} />
              ))}
            </ul>
          </>
        );
        break;
      case "cart":
        return (
          <div>
            <Cartpage items={this.state.cart} />

            <div>
              <button onClick={() => this.handlePage("checkout")}>
                checkout
              </button>
            </div>
          </div>
        );
        break;
      case "checkout":
        return <Checkout />;
      default:
        return <p>page not found</p>;
    }
  };
  render() {
    return (
      <div>
        <Header cart={this.state.cart.length} page={this.handlePage} />
        {this.switchPage()}
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
