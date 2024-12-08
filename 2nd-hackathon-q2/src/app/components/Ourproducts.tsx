import React from 'react'
import Link from 'next/link';

const OurProductsPage = () => {
  return (
    <div>
      <h1 className='font-poppins font-bold flex justify-center text-5xl '>Our Products</h1>
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'> 
      <div className="relative bg-white rounded-lg shadow-lg p-4 group">


    
    <img
      src="/images/product1.svg"
      alt="Product 1"
      className=" h-88 object-cover bg-[#F5F5F5] w-full"
    />

<h2 className='font-poppins font-semibold text-xl'>Syltherine</h2>
<p className='font-poppins font-medium text-xl opacity-[50%] text-black'>Stylish cafe chair</p>

   
    <div className="mt-4">
      <p className="font-semibold text-xl font-poppins">Rp 2.500.000
        <span className='text-black opacity-[50%] pl-[7px] font-poppins font-normal text-sm'><s>Rp 3.500.000</s></span>
      </p>
      
    </div>
  </div>
  <div className="relative bg-white rounded-lg shadow-lg p-4">

  <Link href="/cart">
  <img
  src="/images/featuredproduct.svg"
  alt="Product 2"
  className=" h-88 object-cover bg-[#F5F5F5] w-full"
/>
     
     </Link>
    

</div>
<div className="relative bg-white rounded-lg shadow-lg p-4 group">


    
<img
  src="/images/product3.svg"
  alt="Product 3"
  className=" h-88 object-cover bg-[#F5F5F5] w-full"
/>

<h2 className='font-poppins font-semibold text-xl'>Lolito</h2>
<p className='font-poppins font-medium text-xl opacity-[50%] text-black'>Luxury big sofa</p>


<div className="mt-4">
  <p className="font-semibold text-xl font-poppins">Rp 7.000.000
    <span className='text-black opacity-[50%] pl-[7px] font-poppins font-normal text-sm'><s>Rp 14.000.000</s></span>
  </p>
  
</div>
</div>
<div className="relative bg-white rounded-lg shadow-lg p-4 group ">


    
<img
  src="/images/product4.svg"
  alt="Product 4"
  className=" h-88 object-cover bg-[#F5F5F5] w-full"
/>

<h2 className='font-poppins font-semibold text-xl'>Respira</h2>
<p className='font-poppins font-medium text-xl opacity-[50%] text-black'>Outdoor bar table and stool</p>


<div className="mt-4">
  <p className="font-semibold text-xl font-poppins">Rp 500.000
  </p>
  
</div>
</div>
<div className="relative bg-white rounded-lg shadow-lg p-4 group">


    
<img
  src="/images/product5.svg"
  alt="Product 5"
  className=" h-88 object-cover bg-[#F5F5F5] w-full"
/>

<h2 className='font-poppins font-semibold text-xl'>Grifo</h2>
<p className='font-poppins font-medium text-xl opacity-[50%] text-black'>Night lamp</p>


<div className="mt-4">
  <p className="font-semibold text-xl font-poppins">Rp 1.500.000</p>
  
</div>
</div>
<div className="relative bg-white rounded-lg shadow-lg p-4 group">


    
<img
  src="/images/product6.svg"
  alt="Product 6"
  className=" h-88 object-cover bg-[#F5F5F5] w-full"
/>

<h2 className='font-poppins font-semibold text-xl'>Muggo</h2>
<p className='font-poppins font-medium text-xl opacity-[50%] text-black'>Small mug</p>


<div className="mt-4">
  <p className="font-semibold text-xl font-poppins">Rp 150.000
   
  </p>
  
</div>
</div>
<div className="relative bg-white rounded-lg shadow-lg p-4 group">


    
<img
  src="/images/product7.svg"
  alt="Product 7"
  className=" h-88 object-cover bg-[#F5F5F5] w-full"
/>

<h2 className='font-poppins font-semibold text-xl'>Pingky</h2>
<p className='font-poppins font-medium text-xl opacity-[50%] text-black'>Cute bed set</p>


<div className="mt-4">
  <p className="font-semibold text-xl font-poppins">Rp 7.000.000
    <span className='text-black opacity-[50%] pl-[7px] font-poppins font-normal text-sm'><s>Rp 14.000.000</s></span>
  </p>
  
</div>
</div>
<div className="relative bg-white rounded-lg shadow-lg p-4 group">


    
<img
  src="/images/product8.svg"
  alt="Product 8"
  className=" h-88 object-cover bg-[#F5F5F5] w-full"
/>

<h2 className='font-poppins font-semibold text-xl'>Potty</h2>
<p className='font-poppins font-medium text-xl opacity-[50%] text-black'>Minimalist flower pot</p>


<div className="mt-4">
  <p className="font-semibold text-xl font-poppins">Rp 500.000
  </p>
  
</div>
</div>
</div>
<div className="flex justify-center sm:justify-center lg:justify-center gap-x-8">
    <button className="bg-white border border-[#B88E2F] text-[#B88E2F] font-poppins text-sm font-semibold px-4 py-2 m-6">
    View All Products
    </button></div>

    </div>
  )
}

export default OurProductsPage;
