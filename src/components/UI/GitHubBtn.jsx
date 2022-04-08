import React from 'react';
import classes from '../UI/GitHubBtn.module.css';

const GitHubBtn = () => {
   const gitHubLink = (e) => {
      e.preventDefault();
      window.open('https://github.com/');
   };
   return (
      <button className={classes.gitHubBtn} onClick={gitHubLink}>
         <svg
            width='22'
            height='22'
            viewBox='0 0 22 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
         >
            <g id='akar-icons:github-fill'>
               <g id='Group'>
                  <path
                     id='github-icon'
                     fillRule='evenodd'
                     clipRule='evenodd'
                     d='M11 0C4.9225 0 0 4.9225 0 11C0 15.8675 3.14875 19.9787 7.52125 21.4362C8.07125 21.5325 8.2775 21.2025 8.2775 20.9137C8.2775 20.6525 8.26375 19.7862 8.26375 18.865C5.5 19.3737 4.785 18.1912 4.565 17.5725C4.44125 17.2562 3.905 16.28 3.4375 16.0187C3.0525 15.8125 2.5025 15.3037 3.42375 15.29C4.29 15.2762 4.90875 16.0875 5.115 16.4175C6.105 18.0812 7.68625 17.6137 8.31875 17.325C8.415 16.61 8.70375 16.1287 9.02 15.8537C6.5725 15.5787 4.015 14.63 4.015 10.4225C4.015 9.22625 4.44125 8.23625 5.1425 7.46625C5.0325 7.19125 4.6475 6.06375 5.2525 4.55125C5.2525 4.55125 6.17375 4.2625 8.2775 5.67875C9.1575 5.43125 10.0925 5.3075 11.0275 5.3075C11.9625 5.3075 12.8975 5.43125 13.7775 5.67875C15.8813 4.24875 16.8025 4.55125 16.8025 4.55125C17.4075 6.06375 17.0225 7.19125 16.9125 7.46625C17.6138 8.23625 18.04 9.2125 18.04 10.4225C18.04 14.6437 15.4688 15.5787 13.0213 15.8537C13.42 16.1975 13.7638 16.8575 13.7638 17.8887C13.7638 19.36 13.75 20.5425 13.75 20.9137C13.75 21.2025 13.9563 21.5462 14.5063 21.4362C16.6899 20.699 18.5874 19.2955 19.9317 17.4234C21.276 15.5513 21.9993 13.3048 22 11C22 4.9225 17.0775 0 11 0Z'
                     fill='#1D1C1C'
                  />
               </g>
            </g>
         </svg>

         <p>Disponível no</p>
         <h1>GitHub</h1>
      </button>
   );
};

export default GitHubBtn;
