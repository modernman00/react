import React, { Component } from "react";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();

    this.state = {
      username: "",
      password: "",
      status: "SELECTED",
      error: ""
    };
  }

  componentDidMount() {
    this.inputRef.current.focus()
  }


  changeValidate = event => {
    let val = event.target.value;
    let nam = event.target.name;
    // validate
    if (nam === "username") {
      if (val.length > 20) {
        var stringErr = "Your Entry is too long";
      }
    }

    if(nam === 'email') {
      if(val.length < 5) {
        stringErr = "Your email  is too short"
      }
    }

    this.setState({ 
      error: stringErr, 
      [nam]: val 
    });
   // this.setState({ [nam]: val });
  };

  submit = event => {
    const {username, email} = this.state // deconstruct the this.state object
    alert (`${email}, ${username}`)
    event.preventDefault();
    // Prevent an event from taking place and retain the input
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submit}>
          {this.state.error}
          <br />

          {this.state.username}
          <label> Username</label> <br />
          <input type="text" name="username" className="form-control" onChange={this.changeValidate} ref = {this.inputRef} /><br />

          <label>Email</label><br></br>
          {this.state.email}
          <input type="text" name="email" className="form-control" onChange={this.changeValidate} />
          <br />

          <label>Address</label><br></br>
          {this.state.address}
          <input type="text" name="address" className="form-control" onChange={this.changeValidate} />
          <br />

          {this.state.password}
          <label> Password</label> <br />
          <input type="password" name="password" className="form-control" onChange={this.changeValidate}/>
          <br />

          <label> Confirm Password</label> <br />
          <input type="password" name="confirmPass" className="form-control" onChange={this.changeValidate}/>
          <br />

          <label> Enter your Status</label>
          <select className="form-control" name="status" onChange={this.changeValidate} value={this.state.status}>
            <option value="SELECTED">Selected</option>
            <option value="Agency">Agency</option>
            <option value="Landlord">Landlord</option>
            <option value="Tenant">Tenant</option>
            <option value="Others">Others</option>
          </select>
          <br />

          <button className="btn btn-primary" name="submit">{" "}Submit</button>
        </form>
      </div>
    );
  }
}

export default Personal;
