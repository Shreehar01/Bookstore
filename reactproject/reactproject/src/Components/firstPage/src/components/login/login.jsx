import React from "react";
import loginImg from "../../login.svg";
import axios from 'axios';
import history from '../../../../history';

export class Login extends React.Component {
  constructor () {
      super();
      this.state = {
        email: '',
        password: ''
      };
      this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit= this.onFormSubmit.bind(this);
    }


    handleChange (evt) {
      this.setState({ [evt.target.name]: evt.target.value });
    }

  onFormSubmit = event => {
    event.preventDefault();
    const data = {
      Email: this.state.email,
      Password: this.state.password
    };
    axios
      .post("http://localhost:9000/users/login", data)
      .then((res) =>{
      localStorage.setItem('token', res.data.token);
      if(localStorage.token){
      history.push('/homepage');
    }
      }).catch(err => console.log(err));
  };


  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <form onSubmit={this.onFormSubmit}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input value= {this.state.email} onChange={this.handleChange} type="text" name="email" placeholder="markzuck@harvard.edu" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input value= {this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="17@GaincomesSs" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn">
            Login
          </button>
        </div>
        </form>
      </div>
    );
  }
}
