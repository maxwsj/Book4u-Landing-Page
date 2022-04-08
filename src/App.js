import React, { Fragment, useEffect, useState } from 'react';
import SectionSpace from './components/Layout/SectionSpace/SectionSpace';
import Navigation from './components/Layout/Navigation';
import Hero from './components/Layout/Hero';
import About from './components/Layout/About';
import BookApp from './components/Layout/BookApp';
import Team from './components/Layout/Team';
import Footer from './components/Layout/Footer';
import './App.css';

function App() {
   let [open, setOpen] = useState(false);
   const navDropDownHandler = () => setOpen(!open);

   let [openMenu, setOpenMenu] = useState('swap-on');
   const openMenuHandler = () => setOpenMenu(openMenu);

   let [closeMenu, setCloseMenu] = useState('swap-off');
   const closeMenuHandler = () => setCloseMenu(closeMenu);

   const closeNavDropDownHandler = () => {
      setOpen(false);
      if (open === true) {
         if (openMenu === 'swap-on') {
            setOpenMenu('swap-off');
         } else if (openMenu === 'swap-off') {
            setOpenMenu('swap-on');
         }
         if (closeMenu === 'swap-off') {
            setCloseMenu('swap-on');
         } else if (closeMenu === 'swap-on') {
            setCloseMenu('swap-off');
         }
      }
   };

   return (
      <Fragment>
         <Navigation
            onOpen={navDropDownHandler}
            open={open}
            onClose={closeNavDropDownHandler}
            onOpenMenu={openMenuHandler}
            openMenu={openMenu}
            onCloseMenu={closeMenuHandler}
            closeMenu={closeMenu}
         />
         <main
            className='md:mx-7 lg:mx-12 xl:mx-20'
            onClick={closeNavDropDownHandler}
         >
            <Hero />
            <SectionSpace id='about' />
            <About />
            <SectionSpace id='bookapp' />
            <BookApp />
            <SectionSpace id='team' />
            <Team />
            <SectionSpace />
         </main>
         <Footer />
      </Fragment>
   );
}

export default App;
