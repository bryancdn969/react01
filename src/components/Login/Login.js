import React, {Component} from 'react';
import './Login.css';
import ReactDOM from 'react-dom';
import {postFormData} from "../../services/postFormData";

class Login extends Component {

    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            redirectToReferrer: false
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login(){
        if(this.state.email && this.state.password){
            postFormData(this.state, "login").then((result) =>{
                this.responseData = result;
                console.log(this.responseData);
                if(this.responseData.api_status == 1 ){
                    sessionStorage.setItem('userData',JSON.stringify(this.responseData));
                }
                else{
                    alert("No existe el registro")
                }
            }, (err) => {
                console.log(err);
                //this.common.closeLoading();
            });
        }
        else{
            //this.presentToast(this.requiredData);
        }
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    render() {
        return (
            <div className="row" id="Body">
                <div className="medium-5 columns left">
                    <h4>Login</h4>
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" onChange={this.onChange}/><br/><br/>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password" onChange={this.onChange}/><br/><br/>
                    <input type="submit" className="button success" value="Login" onClick={this.login}/>
                    <br/><br/>
                    <a href="/signup">Registration</a>
                </div>
            </div>
        );
    }
}
export default Login;