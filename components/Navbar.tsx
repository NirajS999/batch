'use client'
import { navLinks } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'

const Navbar = () => {
  const [toggle,setToggle]=useState(false);


  return (
    <nav className='flex items-center justify-between z-30 py-5 padding-container sticky top-0 bg-white'>
      <Link href="/">
        <Image src='/logo.png' alt='logo' width={120} height={60}>
        </Image>
      </Link>
      <ul className='hidden h-full gap-12 font-bold text-xl md:flex'>
        {navLinks.map((link)=>(
          <Link className='hover:text-2xl' style={{ color:`${link.color}`}} href={link.href} key={link.title}>{link.title}</Link>
        ))}
      </ul>
      <button className='black-btn hidden md:flex'>Download</button>

      <div className='sm:hidden flex flex-1 relative justify-end items-center'>
        <img 
          src={toggle? '/cross.png':'/menu.svg'} 
          alt="menu"
          height={32}
          width={32}
          onClick={()=>setToggle(!toggle)}
          />
        <div className={`${
          !toggle ? "hidden" : "flex" } p-6 bg-orange absolute top-10 right-0 mx-4 my-2 rounded-xl min-w-[140px]`}>
          <ul className='font-bold flex flex-1 flex-col text-center justify-end text-white'>
            {navLinks.map((link)=>(
            <Link href={link.href} key={link.title}>{link.title}</Link>
            ))}
            <button>Download</button>
          </ul>
        </div>
      </div>

     

    </nav>

      
    
  )
}

export default Navbar
