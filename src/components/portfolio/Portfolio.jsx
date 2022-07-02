import React from 'react'
import ScriptTag from 'react';

import './portfolio.css'
import './modal.css'

import BACKGROUND from '../../assets/background.png'
import GRUNT from '../../assets/website preview grunt.jpg'
import PPWO from '../../assets/website preview ppwo.jpg'
import HISTORIA_ARISCO from '../../assets/website preview historia arisco.jpg'
import EOPIEKA from '../../assets/website preview eopieka.jpg'
import LUBZINA from '../../assets/website preview lubzina.jpg'

const data = [
  {
    id: 1,
    image: GRUNT,
    title: 'Grunt Usługi Geodezyjne',
    desc: 'Simple business website made in ReactJS', 
    github: 'https://github.com/phszawadzki/react_grunt',
    demoMobile: 'https://phszawadzki.github.io/react_grunt/',
    demo: 'https://phszawadzki.github.io/react_grunt/',
    stack: 'ReactJS Bootstrap HTML CSS '
  },
  {
    id: 2,
    image: PPWO,
    title: 'Projekt Pomagamy w Opiece',
    desc: 'Uses JS library for slides and PHP to run a simplified version of the website if viewed on mobile.', 
    github: 'https://github.com/phszawadzki/react_grunt',
    demoMobile: 'https://piotrarisco.github.io/ppwoMobile/',
    demo: 'https://piotrarisco.github.io/ppow/',
    stack: 'Javascript HTML CSS '
  },
  {
    id: 3,
    image: HISTORIA_ARISCO,
    title: 'Historia Arisco',
    desc: '', 
    github: 'https://github.com/piotrarisco/historia-arisco',
    demoMobile: 'https://www.arisco.pl/historia-firmy/',
    demo: 'https://www.arisco.pl/historia-firmy/',
    stack: 'Javascript HTML CSS '
  },
  {
    id: 4,
    image: EOPIEKA,
    title: 'e-opieka', 
    desc: 'Uses JS library to animate shape transformations and PHP to run a simplified version of the website if viewed on mobile.', 
    github: 'https://piotrarisco.github.io/eOpieka/',
    demoMobile: 'https://piotrarisco.github.io/eOpiekaMobile/',
    demo: 'https://piotrarisco.github.io/eOpieka/',
    stack: 'PHP Javascript Bootstrap HTML CSS '
  },
  {
    id: 5,
    image: LUBZINA,
    title: 'a',
    desc: ' ', 
    github: 'https://piotrarisco.github.io/lubzina/',
    demoMobile: 'https://piotrarisco.github.io/lubzina/',
    demo: 'https://piotrarisco.github.io/lubzina/',
    stack: 'HTML CSS '
  }
]



const Portfolio = () => {

  return (
    <><section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, desc, github, demoMobile, demo, stack }) => {
          return (
            <>
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <p>{stack}</p>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target='_blank' rel="noreferrer">Github</a>
                {/* <a href={demo} className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a> */}
                <button type="button" class="btn btn-primary modal__button" data-bs-toggle="modal" data-bs-target={"#modal" + id}>
                Demo
              </button>
              </div>
            </article>
            
            <div class="modal fade" id={"modal" + id} tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
              <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                  <img class="img__under" src={BACKGROUND} />
                 
                  <iframe class="iphone" src={demoMobile}></iframe>
                  <iframe class="mac" src={demo}></iframe>
                </div>
              </div>
            </div>
            </>
          )
        })}
      </div>

      
    </section>
    
    {/* <script src="alert.js"></script> */}
    </>
     
  )
}


export default Portfolio