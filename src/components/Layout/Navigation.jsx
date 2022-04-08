import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Logo from '../UI/Logo';

const Navigation = ({
   onOpen,
   open,
   onOpenMenu,
   openMenu,
   onCloseMenu,
   closeMenu,
}) => {
   useEffect(() => {
      const hideMenu = () => {
         if (window.innerWidth > 768 && open) {
            onOpen();
            if (openMenu === 'swap-on') {
               onOpenMenu('swap-off');
            } else if (openMenu === 'swap-off') {
               onOpenMenu('swap-on');
            }
            if (closeMenu === 'swap-off') {
               onCloseMenu('swap-on');
            } else if (closeMenu === 'swap-on') {
               onCloseMenu('swap-off');
            }
         }
      };

      window.addEventListener('resize', hideMenu);

      return () => {
         window.removeEventListener('resize', hideMenu);
      };
   });

   return (
      <nav className='shadow-md w-full sticky top-0 left-0 mb-3 z-40'>
         <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            <div
               className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'
            >
               {/* <span className='text-3xl text-indigo-600 mr-1 pt-2'>Logo</span> */}
               <Logo />
            </div>

            <label className='swap swap-rotate text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
               <input type='checkbox' onClick={onOpen} />
               <svg
                  id='menu'
                  xmlns='http://www.w3.org/2000/svg'
                  className={`${'h-6 w-6'} ${openMenu}`}
                  onClick={onOpenMenu}
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
               >
                  <path
                     strokeLinecap='round'
                     strokeLinejoin='round'
                     d='M6 18L18 6M6 6l12 12'
                  />
               </svg>
               <svg
                  id='close'
                  xmlns='http://www.w3.org/2000/svg'
                  className={`${'h-6 w-6'} ${closeMenu}`}
                  onClick={onCloseMenu}
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
            </label>

            <ul
               className={` mb:flex mb:flex-col mb:items-center sm:flex sm:flex-col sm:items-center md:flex md:flex-row md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                  open
                     ? 'top-[60px] border-t-[3px] border-yellow-dand'
                     : 'top-[-490px]'
               }`}
            >
               <li className='md:ml-8 text-lg md:my-0 my-7'>
                  <Link
                     to='/#top'
                     className='text-gray-800 hover:text-gray-400 duration-500 '
                     smooth
                  >
                     Home
                  </Link>
               </li>
               <li className='md:ml-8 text-lg md:my-0 my-7'>
                  <Link
                     to='/#about'
                     className='text-gray-800 hover:text-gray-400 duration-500'
                     smooth
                  >
                     Sobre
                  </Link>
               </li>
               <li className='md:ml-8 text-lg md:my-0 my-7'>
                  <Link
                     to='/#bookapp'
                     className='text-gray-800 hover:text-gray-400 duration-500'
                     smooth
                  >
                     Aplicativo
                  </Link>
               </li>
               <li className='md:ml-8 text-lg md:my-0 my-7'>
                  <Link
                     to='/#team'
                     className='text-gray-800 hover:text-gray-400 duration-500'
                     smooth
                  >
                     Time
                  </Link>
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default Navigation;
