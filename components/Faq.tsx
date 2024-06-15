import { faq } from '@/constants'
import React from 'react'

const Faq = () => {
  return (
    <div className='margin-container'>
        <div className='mb-8'>
            <h6 className='text-orange'>FAQ</h6>
            <h2 className='font-bold text-4xl'>Frequently Asked Questions</h2>
        </div>
        <div className='grid grid-cols-2 gap-4'>
            {faq.map((item)=>(
                <div className='p-4' style={{ backgroundColor: `${item.color}`, color: `${item.tcolor}` }}>
                    <h3 className='font-bold capitalize text-lg'>{item.title}</h3>
                    <p className='capitalize paragraph'>{item.subtitle}</p>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Faq
