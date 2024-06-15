
import React from 'react'

const Advantages = () => {
  return (
    <section className='margin-container hidden lg:block'>
      <div className='flex'>
        <div className=' mt-32 w-full md:w-1/2'>
          <h6 className='orange-text'>Advantages</h6>
          <h2 className='heading font-black'>Why Choose Uifry</h2>
          <div className='flex items-center my-4'>
            <img src="/notification.png" alt="" />
            <h3 className='sub-heading'>Clever Notifiactions</h3>
          </div>
          <p className='paragraph'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam</p>
        </div>
        <div className='relative w-2/4 mt-28 md:mt-0'>
          <img className='absolute top-56 right-16' src="notify.png" alt="" />
          <img src="/notifications.png" alt="" />
          <img className='red-background bottom-32 left-5' src="/red.png" alt="red" width={300} height={300} />
        </div> 
      </div>
      <div className='flex'>
        <div className='relative w-2/4 mt-4 md:mt:0'>
          <img className='absolute top-44 right-44 h-1/5 ' src="card.png" alt="" />
          <img src="customizes.png" alt="" />
          <img className='red-background top-32 right-20' src="/red.png" alt="red" width={500} height={500} />
        </div>
        <div className='w-full mt-16 md:w-1/2 mt-32'>
          <div className=' flex items-center my-4'>
            <img src="/customize.png" alt="" />
            <h3 className='sub-heading'>Fully Customizable</h3>
          </div>
          <p className='paragraph'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam</p>
    </div>
  </div>

      
    </section>

  )
}

export default Advantages
