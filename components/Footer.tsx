import { footerLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='margin-container text-center lg:text-left'>
      <div className='flex flex-col justify-items-center lg:flex-row justify-evenly'>
        <div className='flex justify-center lg:block'>
          <img className='pb-3' src="/logo.png" alt="" />
          <div className='ml-4 lg:ml-0'>
            <div className='mb-3 flex gap-1'>
              <img src="email.png" alt="" />
              <h6>Help@Frybix.Com</h6>
            </div>
            <div className='flex gap-1'>
              <img src="phone.png" alt="" />
              <h6>+1234 456 678</h6>
          </div> 

          </div>
        </div>
        <div className='flex justify-evenly gap-4 lg:w-3/6'>
          {footerLinks.map((item)=>(
            <div className='my-8 lg:my-0' key={item.title}>
              <h4 className='text-xl font-semibold mb-3'>{item.title}</h4>
              <div className='flex flex-col'>
                {item.links.map((link)=>(
                  <Link href={link.url} className='text-sm mb-3 hover:text-lg' key={link.title}>{link.title}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className='text-center'>
          <h4 className='text-xl font-semibold mb-3'>Newsletter</h4>
          <h6 className='text-sm mb-3'>Stay Up To Date</h6>
          <form className='lg:flex' action="">
            <input className="px-2 py-2" placeholder='Your Email' type="text" />
            <button className='black-btn'>Subscibe</button>
          </form>
        </div> 
      </div>
      <div className='border-t-2 text-center mt-12 pt-6 pb-12'>
        <p className='text-sm'>Copyright 2022 Uifry.Com AllRightsReserver</p>
      </div>
    </footer>


  )
}

export default Footer
