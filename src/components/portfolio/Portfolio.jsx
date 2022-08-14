import React from 'react'
import ScriptTag from 'react';

import './portfolio.css'
import './modal.css'

import BACKGROUND from '../../assets/background.png'
import ARISCO from '../../assets/arisco.jpg'
import GRUNT from '../../assets/website preview grunt.jpg'
import PPWO from '../../assets/website preview ppwo.jpg'
import HISTORIA_ARISCO from '../../assets/website preview historia arisco.jpg'
import EOPIEKA from '../../assets/website preview eopieka.jpg'
import LUBZINA from '../../assets/website preview lubzina.jpg'
import MALWA_PRODUCT_LIST from '../../assets/malwa product list.jpg'
import MERMAID_GAME from '../../assets/mermaid game.jpg'

let empty = ''
let special__msg__not__finished = 'Not Finished (most buttons won\'t work)'

const data = [
  {
    id: 1,
    image: LUBZINA,
    title: 'DPS Lubzina',
    desc: empty, 
    github: 'https://piotrarisco.github.io/lubzina/',
    demoMobile: 'https://piotrarisco.github.io/lubzina/',
    demo: 'https://piotrarisco.github.io/lubzina/',
    stack: 'HTML CSS',
    special__msg: special__msg__not__finished
  },
  {
    id: 2,
    image: PPWO,
    title: 'Projekt Pomagamy w Opiece',
    desc: 'Uses JS library for slides and PHP to run a simplified version of the website if viewed on mobile.', 
    github: 'https://github.com/phszawadzki/react_grunt',
    demoMobile: 'https://piotrarisco.github.io/ppwoMobile/',
    demo: 'https://piotrarisco.github.io/ppow/',
    stack: 'Javascript HTML CSS',
    special__msg: empty
  },
  {
    id: 3,
    image: HISTORIA_ARISCO,
    title: 'Historia Arisco',
    desc: empty, 
    github: 'https://github.com/piotrarisco/historia-arisco',
    demoMobile: 'https://www.arisco.pl/historia-firmy/',
    demo: 'https://www.arisco.pl/historia-firmy/',
    stack: 'Javascript HTML CSS',
    special__msg: empty
  },
  {
    id: 4,
    image: EOPIEKA,
    title: 'e-opieka', 
    desc: 'Uses JS library to animate shape transformations and PHP to run a simplified version of the website if viewed on mobile.', 
    github: 'https://piotrarisco.github.io/eOpieka/',
    demoMobile: 'https://piotrarisco.github.io/eOpiekaMobile/',
    demo: 'https://piotrarisco.github.io/eOpieka/',
    stack: 'PHP Javascript Bootstrap HTML CSS',
    special__msg: empty
  },
  {
    id: 5,
    image: GRUNT,
    title: 'Grunt Usługi Geodezyjne',
    desc: 'Simple business website made in ReactJS', 
    github: 'https://github.com/phszawadzki/grunt_radek_marciniak',
    demoMobile: 'https://phszawadzki.github.io/grunt_radek_marciniak/',
    demo: 'https://phszawadzki.github.io/grunt_radek_marciniak/',
    stack: 'ReactJS Bootstrap HTML CSS',
    special__msg: empty
  },
  {
    id: 6,
    image: ARISCO,
    title: 'Arisco.pl',
    desc: 'Concept website. Tinkering with backend and database', 
    github: 'https://github.com/phszawadzki/grunt_radek_marciniak',
    demoMobile: 'https://firstprojectxad222.000webhostapp.com/oferta.php',
    demo: 'https://firstprojectxad222.000webhostapp.com/oferta.php',
    stack: 'PHP SQL Javascript Bootstrap HTML CSS',   
    special__msg: special__msg__not__finished

  },
  {
    id: 7,
    image: MALWA_PRODUCT_LIST,
    title: 'Malwa Product List',
    desc: empty, 
    github: 'https://github.com/phszawadzki/malwa_product_list',
    demoMobile: 'https://phszawadzki.github.io/malwa_product_list/',
    demo: 'https://phszawadzki.github.io/malwa_product_list/',
    stack: 'React Javascript Bootstrap HTML CSS',   
    special__msg: special__msg__not__finished
  },
  {
    id: 8,
    image: MERMAID_GAME,
    title: 'Mermaid Game',
    desc: empty, 
    github: 'https://github.com/phszawadzki/game_1',
    demoMobile: 'https://phszawadzki.github.io/game_1/',
    demo: 'https://phszawadzki.github.io/game_1/',
    stack: 'Javascript HTML CSS',   
    special__msg: empty
  },
]



const Portfolio = () => {

  return (
    <><section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.slice(0).reverse().map(({ id, image, title, desc, github, demoMobile, demo, stack, special__msg }) => {
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
              <div className="special__msg">{special__msg}</div>
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