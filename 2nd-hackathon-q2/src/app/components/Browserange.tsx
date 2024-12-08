import React from 'react'

const BrowserangePage = () => {
  return (
    <div className='m-5'>
      <h1 className='font-poppins font-bold text-4xl flex justify-center'>Browse The Range</h1>
      <p className='font-poppins font-normal text-xl flex justify-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      <div className="relative bg-white rounded-lg shadow-lg p-4 group">


    
<img
  src="/images/br1.svg"
  alt="browse range pic 1"
  className=" h-88 object-cover bg-[#F5F5F5] w-full"
/>

<h2 className='font-poppins font-semibold text-2xl flex justify-center p-4'>Pingky</h2>
</div>
      
<div className="relative bg-white rounded-lg shadow-lg p-4 group">


    
<img
  src="/images/br2.svg"
  alt="browse range pic 1"
  className=" h-88 object-cover bg-[#F5F5F5] w-full"
/>

<h2 className='font-poppins font-semibold text-2xl flex justify-center p-4'>Living</h2>
</div>
      
<div className="relative bg-white rounded-lg shadow-lg p-4 group">


    
<img
  src="/images/br3.svg"
  alt="browse range pic 3"
  className=" h-88 object-cover bg-[#F5F5F5] w-full"
/>

<h2 className='font-poppins font-semibold text-2xl flex justify-center p-4'>Bedroom</h2>
</div>
</div>
      
    </div>
  )
}

export default BrowserangePage;
