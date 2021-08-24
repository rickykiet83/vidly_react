import { Component } from 'react';
import React from 'react';

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submitted');
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account.username = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className='mb-3 col'>
            <label htmlFor='email' className='col-sm-2 col-form-label'>
              Username
            </label>
            <div className='col-sm-4'>
              <input
                autoFocus
                type='text'
                className='form-control'
                id='email'
                value={this.state.account.username}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='mb-3 col'>
            <label htmlFor='password' className='col-sm-2 col-form-label'>
              Password
            </label>
            <div className='col-sm-4'>
              <input
                value={this.state.account.password}
                type='password'
                className='form-control'
                id='password'
              />
            </div>
          </div>
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
