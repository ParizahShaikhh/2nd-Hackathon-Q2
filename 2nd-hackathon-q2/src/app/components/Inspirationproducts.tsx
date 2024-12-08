import React from 'react'

const InspirationProducts = () => {
  return (
    <div className='bg-[#FCF8F3] grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2'>
    <div className='w-1/2'>
      <h1 className='font-poppins font-bold text-5xl'>50+ Beautiful rooms 
      inspiration</h1>
      <p className='font-poppins font-medium text-xl'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
      <div className='font-poppins font-semibold text-xl p-3'><button className='bg-[#B88E2F] p-3'>Explore More</button>
      </div>
    </div>
    <div className='w-2/2 bg-[#FCF8F3]'>
    <img src="/images/inspirationproducts.svg" alt="products for inspiration" />
    </div>
      
    </div>
  )
}

export default InspirationProducts;
