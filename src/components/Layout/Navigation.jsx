import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../UI/Logo';

const Navigation = () => {
   return (
      <nav
         className='flex justify-between mt-3 mb-5 items-center h-12 text-black relative shadow-sm'
         role='navigation'
      >
         <Link to='/'>
            <Logo />
         </Link>
         <div className='md:hidden mr-3'>
            <svg
               xmlns='http://www.w3.org/2000/svg'
               className='h-6 w-6'
               fill='none'
               viewBox='0 0 24 24'
               stroke='currentColor'
               strokeWidth={2}
            >
               <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
               />
            </svg>
         </div>
         <div className='md:block hidden'>
            <Link to='/aplicativo' className='p-4 '>
               Aplicativo
            </Link>
            <Link to='/contato' className='p-4'>
               Contato
            </Link>
            <Link to='/sobre' className='p-4'>
               Sobre
            </Link>
            <Link to='/' className='p-4 '>
               Home
            </Link>
         </div>
      </nav>
   );
};

export default Navigation;
