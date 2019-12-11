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
        <h4 className="carttitle">Checkout</h4>
        <form className="form">
          <div>
            <label className="form-item">
              Name:
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                className="form-input"
              />
            </label>
          </div>
          <div>
            <label className="form-item">
              Email:
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                className="form-input"
              />
            </label>
          </div>
          <div>
            <label className="form-item">
              Phone:
              <input
                type="number"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                className="form-input"
              />
            </label>
          </div>
          <input
            type="submit"
            className="checkout-btn submit-btn"
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
