import React from 'react'
import './testimonials.css'
import AVTR from '../../assets/vincent1.jpg'

import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR,
    name: 'Djama Vincent Joel',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla magnam consequunturdolore dolor commodi rerum, cum accusantium cumque laudantium labore quaerat molestias, nam aperiam quae esse magni, laboriosam consequatur neque'
  },
  {
    avatar: AVTR,
    name: 'Djama Vincent Joel',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla magnam consequunturdolore dolor commodi rerum, cum accusantium cumque laudantium labore quaerat molestias, nam aperiam quae esse magni, laboriosam consequatur neque'
  },
  {
    avatar: AVTR,
    name: 'Djama Vincent Joel',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla magnam consequunturdolore dolor commodi rerum, cum accusantium cumque laudantium labore quaerat molestias, nam aperiam quae esse magni, laboriosam consequatur neque'
  },
  {
    avatar: AVTR,
    name: 'Djama Vincent Joel',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla magnam consequunturdolore dolor commodi rerum, cum accusantium cumque laudantium labore quaerat molestias, nam aperiam quae esse magni, laboriosam consequatur neque'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>
      <Swiper className="container testimonial__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
      >{

        data.map(({ avatar, name, review}, index) =>{
          return (
            <SwiperSlide key={index} className='testimonial'>
            <div className="client__avatar">
              <img src={avatar} alt="" />
            </div>
            <h5>{name}</h5>
              <small className='client__review'>{review}</small>
          </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials