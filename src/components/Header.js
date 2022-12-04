import React from 'react';

// import link
import { Link } from 'react-router-dom';
// import logo
import Logo from '../assets/img/Logo.png';

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b bg-gray-400'>
      <div className='container mx-auto flex justify-between items-center bg-gray-400'>
        {/* <Link to='/'>
          <img src={Logo} alt='' width="16%" />
        </Link> */}
        <div className='flex items-center gap-6'>

          <Link className='hover:text-green-600 transition' to='/' >
            Log in
          </Link>
          <Link
            className='bg-green-600 hover:bg-green-800 text-white px-4 py-3 rounded-lg transition'
            to='/'
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
