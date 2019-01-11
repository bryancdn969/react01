import React, {Component} from 'react';
import {postFormData} from '../../services/postFormData';
import {Redirect} from 'react-router-dom';
import './Signup.css';

class Signup extends Component {

   redirectToReferrer= false;
  constructor(){
    super();
    this.state = {
     password: '',
     email: '',
     name: ''
    };
    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  signup() {
    if(this.state.password && this.state.email && this.state.name){
        postFormData(this.state,"register").then((result) => {
        this.responseData = result;
        console.log(this.responseData);
        if(this.responseData.api_status == 1 ){
            sessionStorage.setItem('userData',JSON.stringify(this.responseData));
            console.log("Exito al guardar");
            this.setState({redirectToReferrer: true});
        }
        else{
            alert("No hay exito al guardar")
        }
     });
    }
  }

	 onChange(e){
	   this.setState({[e.target.name]:e.target.value});
		;
	  }

  render() {
      if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
          return (<Redirect to={'/login'}/>)
      }
    return (
      <div className="row " id="Body">
        <div className="medium-5 columns left">
        <h3>Registrar un nuevo usuario</h3>
        <label>Email: </label>
        <input type="text" name="email"  placeholder="Email" onChange={this.onChange}/><br/><br/>
        <label>Name: </label>
        <input type="text" name="name"  placeholder="Name" onChange={this.onChange}/><br/><br/>
        <label>Password: </label>
        <input type="password" name="password"  placeholder="Password" onChange={this.onChange}/><br/><br/>
        
        <input type="submit" className="button" value="Registrarse" onClick={this.signup}/><br/><br/>
        <a href="/login">Login</a>

            

        </div>
      </div>
    );
  }
}

export default Signup;