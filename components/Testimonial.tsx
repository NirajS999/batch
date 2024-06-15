import React from 'react'

const Testimonial = () => {
  return (
    <div className='margin-container my-10'>
        <div className='text-center'>
            <h5 className='text-sm uppercase'>Testimonial</h5>
            <h2 className='heading'>What Our Users Say About Us?</h2>
        </div>
        <div className='relative flex gap-4'>
            <img className='w-2/5 hidden md:block' src="testimonial.png" alt="" />
            <img className='red-background top-32 left-0' src="/red.png" alt="red" width={300} height={300} />
            <div className='w-full flex flex-col justify-center mt-0 md:w-1/2'>
                <h4 className='sub-heading mb-4'>the best financial accounting app ever!</h4>
                <p className='paragraph'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
                <img className='my-4 w-40' src="/group.png" alt="" />
                <h6 className='text-small font-bold'>nick jonas</h6>
            </div>
        </div>
      
    </div>
  )
}

export default Testimonial
