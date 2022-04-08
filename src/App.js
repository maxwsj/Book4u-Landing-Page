import React, { Fragment } from 'react';
import SectionSpace from './components/Layout/SectionSpace/SectionSpace';
import Navigation from './components/Layout/Navigation';
import Hero from './components/Layout/Hero';
import About from './components/Layout/About';
import BookApp from './components/Layout/BookApp';
import Team from './components/Layout/Team';
import Footer from './components/Layout/Footer';
import './App.css';

function App(props) {
   return (
      <Fragment>
         <Navigation />
         <main className='md:mx-7 lg:mx-12 xl:mx-20'>
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
