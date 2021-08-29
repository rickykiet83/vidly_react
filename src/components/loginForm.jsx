import Form from './common/form';
import Joi from 'joi-browser';
import React from 'react';

class LoginForm extends Form {
  state = {
    data: { username: '', password: '' },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  };

  doSubmit = () => {
    console.log('Submitted');
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          <div className='col col-sm-2'>{this.renderButton('Login')}</div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
