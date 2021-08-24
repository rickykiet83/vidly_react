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

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className='mb-3 col'>
            <label htmlFor='username' className='col-sm-2 col-form-label'>
              Username
            </label>
            <div className='col-sm-4'>
              <input
                autoFocus
                type='text'
                name='username'
                className='form-control'
                id='username'
                value={account.username}
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
                value={account.password}
                onChange={this.handleChange}
                type='password'
                name='password'
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
