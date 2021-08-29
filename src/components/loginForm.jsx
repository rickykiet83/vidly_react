import Form from './common/form';
import Input from './common/input';
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
    const { data, errors } = this.state;
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            name='username'
            label='Username'
            type='text'
            value={data.username}
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name='password'
            label='Password'
            type='password'
            value={data.password}
            onChange={this.handleChange}
            error={errors.password}
          />
          <div className='col col-sm-2'>
            <button
              disabled={this.validate()}
              type='submit'
              className='btn btn-primary mb-3'
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
