import React from 'react';
import classes from '../UI/PlayStoreBtn.module.css';

const PlayStoreBtn = () => {
   const playStoreLink = (e) => {
      e.preventDefault();
      window.open('https://play.google.com/store/apps');
   };
   return (
      <button className={classes.playStoreBtn} onClick={playStoreLink}>
         <svg
            width='21'
            height='20'
            viewBox='0 0 21 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
         >
            <g id='fa-brands:google-play'>
               <path
                  id='playstore-icon'
                  d='M13.1371 8.78625L4.22423 0.4875L15.5642 6.5325L13.1371 8.78625ZM1.89807 0C1.37307 0.255 1.02173 0.72 1.02173 1.32375V17.8725C1.02173 18.4762 1.37307 18.9412 1.89807 19.1962L12.2608 9.59625L1.89807 0ZM19.0696 8.46L16.691 7.18125L14.0377 9.6L16.691 12.0187L19.1181 10.74C19.845 10.2037 19.845 8.99625 19.0696 8.46ZM4.22423 18.7125L15.5642 12.6675L13.1371 10.4137L4.22423 18.7125Z'
                  fill='#1D1C1C'
               />
            </g>
         </svg>
         <p>Disponível na</p>
         <h1>PlayStore</h1>
      </button>
   );
};

export default PlayStoreBtn;
