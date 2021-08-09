import { Link, NavLink } from 'react-router-dom';

import React from 'react';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Vidly
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink
                className='nav-link active'
                aria-current='page'
                to='/movies'
              >
                Movies
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/customers'>
                Customers
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/rentals'>
                Rentals
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
