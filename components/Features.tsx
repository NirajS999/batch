import React from 'react'
import { features } from '@/constants'

const Features = () => {
  return (
    <section className='relative flex gap-4 mb-8 margin-container' id='features'>
      <img className='red-background top-0 right-0' src="/red.png" alt="red" width={300} height={300} />
      <div className='relative hidden lg:block'>
        <img src="/features.png" alt="features" />
        <img className='red-background top-20 left-0' src="/red.png" alt="red" width={300} height={300} />
      </div>
      <div className='mt-12'>
        <h6 className='orange-text'>Features</h6>
        <h3 className='heading'>Uifry Premium</h3>
        {features.map((item)=>(
          <div className='mb-4' key={item.title}>
            <div className='flex gap-2 items-center mb-2 text-xs'>
              <img src={item.icon} alt="" />
              <h5 className='font-black text-lg'>{item.title}</h5>
            </div>
            <p className='paragraph'>{item.subtitle}</p>
          </div>
          ))}        
        </div>
      
    </section>
  )
}

export default Features
