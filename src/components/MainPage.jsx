import React, { useEffect, useState } from 'react';
import "../styles.scss";
import "./MainPage.css"
import initScrollReveal from "./scrollReveal";
import initTiltEffect from "./tiltAnimation";
import { targetElements, defaultProps } from "./scrollRevealConfig";
import ContactPage from './ContactPage/ContactPage';

import "react-sweet-progress/lib/style.css";
import ProgressComp from './ProgressComp';

function MainPage() {
    useEffect(()=>{
        initScrollReveal(targetElements, defaultProps);
        initTiltEffect();
    },[])
return (
        <div>
              <div id="top"></div>

<section id="hero" class="jumbotron">
  <div class="container">
    <h1 class="hero-title load-hidden">
      Hi, my name is <span class="text-color-main">Amisha Sahu</span>
      <br />
      I'm a Software Developer.
    </h1>
    <p class="hero-cta load-hidden">
      <a rel="noreferrer" class="cta-btn cta-btn--hero" href="#about"
        >Know more</a>
    </p>
  </div>
</section>

<section id="about">
  <div class="container">
    <h2 class="section-title load-hidden">About me</h2>
    <div class="row about-wrapper">
      <div class="col-md-6 col-sm-12">
        <div class="about-wrapper__image load-hidden">
          <img
            alt="Profile"
            class="img-fluid rounded shadow-lg"
            height="auto"
            width="300px"
            src="assets/myprofile.jpeg"
          ></img>
        </div>
      </div>
      <div class="col-md-6 col-sm-12">
        <div class="about-wrapper__info load-hidden">
          <p class="about-wrapper__info-text">
          Have two years of experience in Web Development using React JS. I am a quick learner, highly motivated to work on innovative projects
and explore new opportunities. Would love work on recent technologies and building crazy applications.
          </p>
          <p class="about-wrapper__info-text">
          My interests lies in Graphic designing and dancing.
          </p>
          <div class="row" style={{'width':"100%"}}>
          <div class="col-md-6">
          <ProgressComp value="HTML" range={80} />
          <ProgressComp value="CSS" range={70}  />
          <ProgressComp value="React JS" range={88}  />
          </div>
          <div class="col-md-6">
          <ProgressComp value="Javascript" range={85}  />
          <ProgressComp value="Wordpress" range={80}  />
          <ProgressComp value="jQuery" range={60}  />
          </div>
          </div>
          <span class="d-flex mt-3">
            <a
              rel="noreferrer"
              target="_blank"
              class="cta-btn cta-btn--resume"
              href="assets/resume.pdf"
            >
              View Resume
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="projects">
  <div class="container">
    <div class="project-wrapper">
      <h2 class="section-title dark-blue-text">Projects</h2>


      <div class="row">
        <div class="col-lg-4 col-sm-12">
          <div class="project-wrapper__text load-hidden">
            <h3 class="project-wrapper__text-title">Memory Game</h3>
            <div>
              <p class="mb-4">
                Developed using React JS,HTML,CSS,Bootstrap. This is a simple game where you match the pairs.The speciality about this app is that this application is a progressive web application.
              </p>
            </div>
            <a
              rel="noreferrer"
              target="_blank"
              class="cta-btn cta-btn--hero"
              href="https://serene-marshmallow-3f11f1.netlify.app/"
            >
              See Live
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              class="cta-btn text-color-main"
              href="https://github.com/amishasahu/memory-game"
            >
              Source Code
            </a>
          </div>
        </div>
        <div class="col-lg-8 col-sm-12">
          <div class="project-wrapper__image load-hidden">
            <a rel="noreferrer" href="#!" target="_blank">
              <div
                data-tilt
                data-tilt-max="4"
                data-tilt-glare="true"
                data-tilt-max-glare="0.5"
                class="thumbnail rounded js-tilt"
              >
                <img
                  alt="Project"
                  class="img-fluid"
                  src="assets/game1.png"
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-sm-12">
          <div class="project-wrapper__text load-hidden">
            <h3 class="project-wrapper__text-title">Tinder Clone</h3>
            <div>
              <p class="mb-4">
              Developed using MERN stack(Mongo DB,Express,React JS,Node JS). Its a simple Tinder Clone.
              It has basic functionalities like fetching data from the database. Swipe right and swipe left functionality. 
              </p>
            </div>
            <a
              rel="noreferrer"
              target="_blank"
              class="cta-btn cta-btn--hero"
              href="#!"
            >
              See Live
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              class="cta-btn text-color-main"
              href="#!"
            >
              Source Code
            </a>
          </div>
        </div>
        <div class="col-lg-8 col-sm-12">
          <div class="project-wrapper__image load-hidden">
            <a rel="noreferrer" href="#!" target="_blank">
              <div
                data-tilt
                data-tilt-max="4"
                data-tilt-glare="true"
                data-tilt-max-glare="0.5"
                class="thumbnail rounded js-tilt"
              >
                <img
                  alt="Project"
                  class="img-fluid"
                  src="assets/game2.png"
                />
              </div>
            </a>
          </div>
        </div>
      </div>



    </div>
  </div>
</section>

<section id="contact">
  <div class="container">
    <h2 class="section-title">Contact</h2>
    <div class="contact-wrapper load-hidden">
      <p class="contact-wrapper__text">I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.</p>
        <ContactPage />
    </div>
  </div>
</section>

<footer class="footer navbar-static-bottom">
  <div class="container">
    <a rel="noreferrer" href="#top" class="back-to-top">
      <i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>
    </a>
    <div class="social-links">
      <a rel="noreferrer" href="#!" target="_blank">
        <i class="fa fa-twitter fa-inverse"></i>
      </a>
      <a rel="noreferrer" href="#!" target="_blank">
        <i class="fa fa-linkedin fa-inverse"></i>
      </a>
      <a rel="noreferrer" href="#!" target="_blank">
        <i class="fa fa-github fa-inverse"></i>
      </a>
    </div>

    <hr />

    <p class="footer__text">
      © 2022 - Template developed by -
      <a rel="noreferrer" href="https://github.com/cobidev" target="_blank"
        >Amisha Sahu</a>
    </p>



  </div>
</footer>
        </div>
    );
}

export default MainPage;