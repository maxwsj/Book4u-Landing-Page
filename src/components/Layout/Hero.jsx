import React from 'react';
import Carousel from './Carousel';
import Button from '../UI/Button';
import GitHubBtn from '../UI/GitHubBtn';
import PlayStoreBtn from '../UI/PlayStoreBtn';

import classes from '../Layout/Hero.module.css';

const Hero = () => {
   return (
      <section className={classes.home}>
         <div className={classes['home__item--1']}>
            <Carousel />
         </div>
         <div className={classes['home__item--2']}>
            <h1>Novos, Seminovos, Usados, Troque agora</h1>
            <p>
               Todo livro é uma nova história, todo livro carrega uma história.
               Encontre a sua agora.
            </p>
         </div>
         <div className={classes['home__item--3']}>
            <Button />
         </div>
         <div className={classes['home__item--4']}>
            <GitHubBtn />
            <PlayStoreBtn />
         </div>
      </section>
   );
};

export default Hero;
