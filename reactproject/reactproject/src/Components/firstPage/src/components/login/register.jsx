import React from "react";
import nodeapi from './API';
import loginImg from "../../login.svg";
import axios from 'axios';
import history from '../../../../history';
export class Register extends React.Component {
  constructor () {
      super();
      this.state = {
        email: '',
        password: '',
        year:''
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
      Password: this.state.password,
      Year: this.state.year
    };
    axios
      .post("http://localhost:9000/users", data)
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
        <div className="header">SignUp</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div  className="form">

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input value= {this.state.email} onChange={this.handleChange} type="text" name="email" placeholder="markzuck@harvard.edu" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input value= {this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="17@GAincomesSs" />
            </div>
            <div className="form-group">
              <label htmlFor="username">Year</label>
              <input value= {this.state.year} onChange={this.handleChange} type="text" name="year" placeholder="Eg: Freshman" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button  type="submit" className="btn">
            SignUp
          </button>
        </div>
        </form>
      </div>
    );
  }
}
