import React from 'react';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import About from './Components/About';
import Podcast from './Components/Podcast';
import Youtube from './Components/Youtube';
import Contact from './Components/Contact';
import { Element, animateScroll as scroller } from 'react-scroll';
import './App.css';
import './css/boxicons/css/boxicons.css'
import './css/boxicons/css/boxicons.min.css'

function App() {
  return (
    <div className="App">
      <Element name="navbar"><Navbar/></Element>
      <Element name="landing"><Landing/></Element>
      <div class='contact-icons'>
        <a href='https://www.instagram.com/highbredhq/' target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt first-link"></i></a>
        <a href='https://twitter.com/highbredhq' target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter second-link"></i></a>
        <a href='https://www.youtube.com/channel/UC7t-2x7CX6nffNrtymFRuvg?disable_polymer=true' target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube third-link"></i></a>
        <a href='https://open.spotify.com/user/ucfsefick0ig4kfsngdgvzgv0?si=tdSEqyr7QnGUDBhXdRLo7A' target="_blank" rel="noopener noreferrer"><i class="bx bxl-spotify fourth-link"></i></a>
      </div>
      <main>
        <section id="about" class="about">
          <Element name='about'><About/></Element>
        </section>
        <section id="podcast" class="podcast section-bg">
          <Element name='podcast'><Podcast/></Element>
        </section>
        <section id="youtube" class="youtube section-bg">
          <Element name='youtube'><Youtube/></Element>
        </section>
        <section id="contact" class="contact section-bg">
          <Element name='contact'><Contact/></Element>
        </section>
      </main>
    </div>
  );
}

export default App;