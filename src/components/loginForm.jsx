import { Component } from 'react';

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submitted');
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className='mb-3 col'>
            <label htmlFor='email' className='col-sm-2 col-form-label'>
              Email
            </label>
            <div className='col-sm-4'>
              <input type='password' className='form-control' id='email' />
            </div>
          </div>
          <div className='mb-3 col'>
            <label htmlFor='password' className='col-sm-2 col-form-label'>
              Password
            </label>
            <div className='col-sm-4'>
              <input type='password' className='form-control' id='password' />
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
