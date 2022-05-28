import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar_radek_marciniak.png'
import AVTR_BLANK from '../../assets/avatar_blank.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVTR1,
        name: 'inż. Radek Marciniak',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        avatar: AVTR_BLANK,
        name: 'blank',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        avatar: AVTR_BLANK,
        name: 'blank',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        avatar: AVTR_BLANK,
        name: 'blank',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
        <h5>Reviews from clients</h5>
        <h2>Testimonials</h2>
        <Swiper className="container testimonials__container"
        // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
            {
              data.map(({avatar, name, review}) => {
                return (
                    <SwiperSlide className="testimonial">
                        <div className="client__avatar">
                            <img src={avatar} alt={name} />
                        </div>
                        <h5 className="client__name"><a href="#">{name}</a></h5>
                        <small className="client__review">{review}</small>
                    </SwiperSlide>
                )
              })
            }
        </Swiper>
    </section>
  )
}

export default Testimonials