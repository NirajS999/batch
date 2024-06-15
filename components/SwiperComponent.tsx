'use client';
import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import { advantages } from '@/constants'


const SwiperComponent = () => {

  return (
  <div className='block margin-container lg:hidden'>
    <div className='text-center'>
      <h6 className='orange-text'>Advantages</h6>
      <h2 className='heading font-black'>Why Choose Uifry</h2>
    </div>
    <Swiper 
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation 
      pagination={{ type:'fraction', clickable:true }} 
      slidesPerView={1}
      className='text-center mb-8 '>

      {advantages.map((item,index)=>(
        <SwiperSlide key={index}>
          <div className='my-8 mx-20'>
            <div className='flex gap-2 items-center justify-center pb-4'>
              <img src={item.image} alt="logo" />
              <h3 className='sub-heading'>{item.title}</h3>
            </div>
            <p className='paragraph'>{item.subtitle}</p>
          </div>
        </SwiperSlide>
      ))}

     </Swiper>
  </div>

  )
}

export default SwiperComponent

