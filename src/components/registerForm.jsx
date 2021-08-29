import Form from './common/form';
import Joi from 'joi-browser';
import React from 'react';

class RegisterForm extends Form {
  state = {
    data: { username: '', password: '', name: '' },
    errors: {},
  };
  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().min(5).label('Password'),
    name: Joi.string().required().label('Name'),
  };

  doSubmit = () => {
    console.log('Submitted');
  };

  render() {
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderInput('name', 'Name')}
          <div className='col col-sm-2'>{this.renderButton('Register')}</div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
