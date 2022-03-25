import { Fragment } from 'react';
import Navigation from './components/Layout/Navigation';
import Hero from './components/Layout/Hero';
import './App.css';

function App() {
  return (
    <Fragment>
      <Navigation />
      <div className='container'>
        <Hero />
      </div>
    </Fragment>
  );
}

export default App;
