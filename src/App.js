import { Fragment } from 'react';
import Navigation from './components/Layout/Navigation';
import Hero from './components/Layout/Hero';
import './App.css';

function App() {
   return (
      <Fragment>
         <Navigation />
         <main className='container'>
            <Hero />
         </main>
      </Fragment>
   );
}

export default App;
