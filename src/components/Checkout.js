import React from "react";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: ""
    };
  }
  handleChange = event => {
    console.log(event);
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <>
        <h4>Checkout</h4>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="number"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </label>
          <input
            type="submit"
            value="Submit"
            onClick={() =>
              alert(`${this.state.name} already bought these itmes.`)
            }
          />
        </form>
      </>
    );
  }
}
export default Checkout;
