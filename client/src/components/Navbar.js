import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='navbar__item navbar__item--center'>
          <div className='navbar__brand'>
            <a href='http://localhost:3000' className='navbar__link'>
              Turnos Online
            </a>
          </div>
        </div>
        <div className='navbar__item navbar__login'>Login</div>
      </div>
    );
  }
}

export default Navbar;
