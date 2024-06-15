import React from 'react'

const Hero = () => {
  return (
    <section className='flex margin-container'>
      <div className='relative pt-28 flex-1 md:pt-20'>
        <h1 className="font-bold text-5xl capitalize">make the best financial decisions</h1>
        <p className='paragraph mt-6'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        <img className='red-background top-0 right-40' src="/red.png" alt="red" width={300} height={300} />
        <div className='mt-4 flex'>
          <button className='black-btn mr-8'>
            <div className='flex items-center'>
              Get Started 
              <img className='ml-1' src="/arrow.png" alt="" />
            </div>
          </button>
          <button className='font-bold py-3 px-8'>
            <div className='flex items-center'>
              <img className='mr-2' src="video.png" alt="" />
              Watch Video
            </div>
          </button>
        </div>
        <div className='pt-2 md:pt-0'>
          <img className='' src="/hero_img2.png" alt="" width={500} height={300} />
        </div>
          
      </div>
        <div className='relative mr-8 w-2/5 mt-4 hidden md:block'>
            <img className='absolute mt-10 ml-16' src="/hero_img-2.png" alt="img2" />
            <img className='absolute xl:mr-20' src="/hero_img-1.png" alt="img1" />
            <img className='ml-14' src="/hero_img-3.png" alt="img3" />
            <img className='red-background bottom-5 left-32' src="/red.png" alt="red" width={300} height={300} />
             
        </div>
      
    </section>
  )
}

export default Hero
