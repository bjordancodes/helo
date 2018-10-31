import React, {Component} from 'react';

class Auth extends Component {
    constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: ''
        }
    }

    loginHandler = (field, e) => {
        this.setState({[field]: e})
    }

render() {

    console.log(this.state)

return (
      <div>
          <form>
          <input type='text' onChange={(e) => this.loginHandler("username", e.target.value)} placeholder="Username"/><br/>
          <input type='text' onChange={(e) => this.loginHandler("password", e.target.value)} placeholder="Password"/>
          </form>
          
        </div>
       )

    }
}

export default Auth;