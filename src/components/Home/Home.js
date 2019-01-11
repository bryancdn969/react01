import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Home.css';
import {PostData} from '../../services/PostData';

class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '',
            name: '',
            redirectToReferrer: false
        };
        this.onChange = this.onChange.bind(this);
    }


    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

  render() {
      if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
          return (<Redirect to={'/login'}/>)
      }
      return (
          <div className="row " id="Body">
              <div className="medium-5 columns left">
                  <h4>Registro de nuevo usuario</h4>
                  <label>Email: </label>
                  <input type="text" name="email"  placeholder="Email" onChange={this.onChange}/><br/><br/>
                  <label>Name: </label>
                  <input type="text" name="name"  placeholder="Name" onChange={this.onChange}/><br/><br/>
                  <label>Username: </label>
                  <input type="text" name="username" placeholder="Username" onChange={this.onChange}/><br/><br/>
                  <label>Password: </label>
                  <input type="password" name="password"  placeholder="Password" onChange={this.onChange}/><br/><br/>

                  <input type="submit" className="button" value="Registrarse" onClick={this.signup}/><br/><br/>
                  <a href="/login">Login</a>
              </div>

          </div>
      );
  }
}

export default Home;