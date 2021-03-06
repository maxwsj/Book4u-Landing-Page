import React from 'react';
import GitHubBtn from '../UI/GitHubBtn';
import PlayStoreBtn from '../UI/PlayStoreBtn';
import CardItems from '../Layout/TeamItems/TeamCardItems';
import classes from './Team.module.css';
import andreImg from '../../assets/TeamImages/andre.jpeg';
import gustavoImg from '../../assets/TeamImages/gustavo.jpeg';
import maxImg from '../../assets/TeamImages/max.jpg';

const Team = () => {
   const teamImgs = [andreImg, gustavoImg, maxImg];
   return (
      <section className={classes.team__grid}>
         <div className={classes['team__grid-item--1']}>
            <h1>Time de Desenvolvedores</h1>
            <h2>Todos são o coração do aplicativo</h2>
         </div>
         <div className={classes['team__grid-item--2']}>
            <CardItems
               name={'Max W. Santos'}
               description={'Design, Front-end web e mobile'}
               linkedin_id={'max-linkedin'}
               git_id={'max-github'}
               face_id={'max-facebook'}
               img_src={teamImgs[2]}
            />
            <CardItems
               name={'Gustavo Fontana'}
               description={'Back end mobile'}
               linkedin_id={'gustavo-linkedin'}
               git_id={'gustavo-github'}
               face_id={'gustavo-facebook'}
               img_src={teamImgs[1]}
            />
            <CardItems
               name={'Andre Damázio'}
               description={'Back end mobile'}
               linkedin_id={'andre-linkedin'}
               git_id={'andre-github'}
               face_id={'andre-facebook'}
               img_src={teamImgs[0]}
            />
         </div>
         <div className={classes['team__grid-item--3']}>
            <GitHubBtn />
            <PlayStoreBtn />
         </div>
      </section>
   );
};

export default Team;
