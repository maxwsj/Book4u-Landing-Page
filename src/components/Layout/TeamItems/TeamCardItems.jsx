import React from 'react';
import classes from '../TeamItems/TeamCardItems.module.css';

const TeamCardItems = (props) => {
   const githubIds = {
      'max-github': 'https://github.com/maxwsj',
      'gustavo-github': 'https://github.com/gustavofontanavieira',
      'andre-github': 'https://github.com/AnDamazio',
   };
   const linkedinIds = {
      'max-linkedin': 'https://www.linkedin.com/in/max-william-41918b131/',
      'gustavo-linkedin':
         'https://www.linkedin.com/in/gustavo-fontana-vieira-741299209/',
      'andre-linkedin':
         'https://www.linkedin.com/in/andr%C3%A9-damazio-01ba96216/',
   };
   const facebookIds = {
      'max-facebook': 'https://www.facebook.com/max.willian.54772/',
      'gustavo-facebook': 'https://www.facebook.com/gustavo.fontanavieira',
      'andre-facebook': 'https://www.facebook.com',
   };

   const gitHubLink = (e) => {
      e.preventDefault();
      const id = e.currentTarget.id;
      for (const [key, i] of Object.entries(githubIds)) {
         if (id === key) window.open(i);
      }
   };
   const linkedinLink = (e) => {
      const id = e.currentTarget.id;
      for (const [key, i] of Object.entries(linkedinIds)) {
         if (id === key) window.open(i);
      }
   };
   const facebookLink = (e) => {
      e.preventDefault();
      const id = e.currentTarget.id;
      for (const [key, i] of Object.entries(facebookIds)) {
         if (id === key) window.open(i);
      }
   };
   return (
      <div className={classes['card__container']}>
         <figure>
            <div className='avatar group'>
               <div className='w-44 lg:w-56 rounded relative flex hover:opacity-70 transition-opacity duration-500 ease-in-out'>
                  <img
                     // className={classes['card_img']}
                     src={props.img_src}
                     alt='card item'
                  />
                  <div className='bg-black self-end h-8 w-full absolute hidden group-hover:inline-block duration-500 text-white'>
                     <div className='flex justify-evenly mt-1'>
                        <i className='tooltip' data-tip='GitHub'>
                           <button
                              id={props.git_id}
                              onClick={gitHubLink}
                              className='transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'
                           >
                              <svg
                                 xmlns='http://www.w3.org/2000/svg'
                                 width='24'
                                 height='24'
                                 fill='#f7f7f7'
                              >
                                 <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z'
                                 ></path>
                              </svg>
                           </button>
                        </i>
                        <i className='tooltip' data-tip='Facebook'>
                           <button
                              id={props.face_id}
                              onClick={facebookLink}
                              className='transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'
                           >
                              <svg
                                 xmlns='http://www.w3.org/2000/svg'
                                 width='24'
                                 height='24'
                                 fill='#f7f7f7'
                              >
                                 <path d='M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z'></path>
                              </svg>
                           </button>
                        </i>
                        <i className='tooltip' data-tip='Linkedin'>
                           <button
                              id={props.linkedin_id}
                              onClick={linkedinLink}
                              className='transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'
                           >
                              <svg
                                 xmlns='http://www.w3.org/2000/svg'
                                 width='24'
                                 height='24'
                                 fill='#f7f7f7'
                              >
                                 <path d='M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z'></path>
                              </svg>
                           </button>
                        </i>
                     </div>
                  </div>
               </div>
            </div>
         </figure>
         <div className='card-body text-center group relative pt-2 lg:pt-5'>
            <h2 className='card-title text-lg justify-center'>{props.name}</h2>
            <p className='text-sm'>{props.description}</p>
         </div>
      </div>
   );
};

export default TeamCardItems;
