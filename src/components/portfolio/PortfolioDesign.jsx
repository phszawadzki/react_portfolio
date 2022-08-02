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
]



const Portfolio = () => {
 // myArray.slice(0).reverse().map(function(...
  return (
    <><section id="portfolio">
      <h5>My Recent Doodles and such</h5>
      <h2>Design</h2> 
      <div className="container portfolio__container">
        {data.slice(0).reverse().map(({ id, image, title, desc, github, demoMobile, demo, stack, special__msg }) => {
          return (
            <>
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
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