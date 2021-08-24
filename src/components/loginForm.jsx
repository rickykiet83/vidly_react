import { Component } from 'react';
import Input from './common/input';
import Joi from 'joi-browser';
import React from 'react';

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
    errors: {},
  };

  schema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  validate = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });
    console.log(result);

    const errors = {};
    if (this.state.account.username.trim() === '')
      errors.username = 'Username is required';
    if (this.state.account.password.trim() === '')
      errors.password = 'Password is required';

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log('Submitted');
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  validateProperty = ({ name, value }) => {
    if (name === 'username') {
      if (value.trim() === '') return 'Username is required.';
    }
    if (name === 'password') {
      if (value.trim() === '') return 'Password is required.';
    }
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            name='username'
            label='Username'
            type='text'
            value={account.username}
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name='password'
            label='Password'
            type='password'
            value={account.password}
            onChange={this.handleChange}
            error={errors.password}
          />
          <div className='col col-sm-2'>
            <button type='submit' className='btn btn-primary mb-3'>
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
