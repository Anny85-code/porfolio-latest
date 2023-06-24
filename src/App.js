import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Education from './components/Education/Education';
import Interest from './components/skills/Interest';
import Projects from './components/Projects/Projects.js';
import CarouselImages from './components/Carousel/Carousel';
import Projects2 from './components/projects2/Projects2';

class App extends Component {
  render() {
    document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.side').addEventListener('click', function () {
      document.body.classList.toggle('overflow-hidden')
    });
  });
    return (
        <>
        <div className='App'>
          <div className='side'>
            <nav className='navbar side navbar-expand-lg navbar-light p-0'>
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                style={{ zIndex: '1' }}
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <Sidebar />
              </div>
            </nav>
          </div>
         <div className='main'>
            <CarouselImages />
            <Projects />
            <Projects2 />
            <About />
            <Interest />
            <Education />
          </div>
        </div>
         </>
    );
  }
}

export default App;
