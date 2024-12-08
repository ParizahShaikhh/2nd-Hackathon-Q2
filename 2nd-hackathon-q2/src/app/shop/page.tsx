import React from "react";
import HeaderPage from "../components/NavBar";
import FooterPage from "../components/Footer";
import Link from "next/link";

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeaderPage />
      <div className="min-h-screen bg-white">
        <img src="/images/bb2.png" alt="Shop Banner" />
      </div>
      <div>
        <h1 className="font-poppins font-medium text-5xl">Shop</h1>
        <h3 className="font-poppins font-medium text-xl">Home</h3>
        <img src="/images/greater.svg" alt="file route" />
        <p className="font-poppins font-light text-xl">Shop</p>
      </div>
      <div className="bg-[#F9F1E7]"><img src="/images/filter.svg" alt="filter" /> <span>Filter</span> <img src="/images/round.svg" alt="round" /><img src="/images/viewlist.svg" alt="viewlist" /><span> | </span> <span>Showing 1–16 of 32 results</span><span>Show</span> <button className="bg-white text-[#9F9F9F] p-3 m-5">16</button> <span>Short by</span><button className="bg-white text-[#9F9F9F] p-3 m-5">Default</button>
      </div>
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

  <Link href="/productdetails">
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
  src="/images/product1.svg"
  alt="Product 5"
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



<img
src="/images/product2610.svg"
alt="Product 6"
className=" h-88 object-cover bg-[#F5F5F5] w-full"
/>
<h2 className='font-poppins font-semibold text-xl'>Leviosa</h2>
<p className='font-poppins font-medium text-xl opacity-[50%] text-black'>Stylish cafe chair</p>


<div className="mt-4">
  <p className="font-semibold text-xl font-poppins">Rp 2.500.000
   
  </p>
  
</div>
</div>
<div className="relative bg-white rounded-lg shadow-lg p-4 group">



<img
src="/images/product3.svg"
alt="Product 7"
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
alt="Product 8"
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
  src="/images/product1.svg"
  alt="Product 9"
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



<img
src="/images/product2610.svg"
alt="Product 10"
className=" h-88 object-cover bg-[#F5F5F5] w-full"
/>
<h2 className='font-poppins font-semibold text-xl'>Leviosa</h2>
<p className='font-poppins font-medium text-xl opacity-[50%] text-black'>Stylish cafe chair</p>


<div className="mt-4">
  <p className="font-semibold text-xl font-poppins">Rp 2.500.000
   
  </p>
  
</div>
</div>
<div className="relative bg-white rounded-lg shadow-lg p-4 group">



<img
src="/images/product3.svg"
alt="Product 11"
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
alt="Product 12"
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
  src="/images/product1.svg"
  alt="Product 13"
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



<img
src="/images/product2610.svg"
alt="Product 14"
className=" h-88 object-cover bg-[#F5F5F5] w-full"
/>
<h2 className='font-poppins font-semibold text-xl'>Leviosa</h2>
<p className='font-poppins font-medium text-xl opacity-[50%] text-black'>Stylish cafe chair</p>


<div className="mt-4">
  <p className="font-semibold text-xl font-poppins">Rp 2.500.000
   
  </p>
  
</div>
</div>
<div className="relative bg-white rounded-lg shadow-lg p-4 group">



<img
src="/images/product3.svg"
alt="Product 15"
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
alt="Product 16"
className=" h-88 object-cover bg-[#F5F5F5] w-full"
/>

<h2 className='font-poppins font-semibold text-xl'>Respira</h2>
<p className='font-poppins font-medium text-xl opacity-[50%] text-black'>Outdoor bar table and stool</p>


<div className="mt-4">
<p className="font-semibold text-xl font-poppins">Rp 500.000
</p>

</div>
</div>


</div>
<div className="bg-white flex justify-center gap-6 m-5 items-center"><button className="bg-[#B88E2F] font-poppins font-normal text-xl rounded p-4">1</button><button className="bg-[#F9F1E7] font-poppins font-normal text-xl rounded p-4">2</button><button className="bg-[#F9F1E7] font-poppins font-normal text-xl rounded p-4">3</button><button className="bg-[#F9F1E7] font-poppins font-light text-xl rounded p-4">Next</button></div>
<div className="bg-[#FAF3EA] grid grid-cols-1 lg:grid-cols-4 p-9">
  <div className="justify-center flex"><img src="/images/trophy1.svg" alt="trophy" /><div className="pl-3"><h1 className="font-poppins font-semibold text-2xl">High Quality</h1><p className="font-poppins font-medium text-xl text-[#898989] m1-3">crafted from top materials</p></div></div>
  <div className="justify-center flex"><img src="/images/guarantee.svg" alt="Guarantee" /><div className="pl-3"><h1 className="font-poppins font-semibold text-2xl">Warranty Protection</h1><p className="font-poppins font-medium text-xl text-[#898989] m1-3">Over 2 years</p></div></div>
  <div className="justify-center flex"><img src="/images/shipping.svg" alt="Shipping" /><div className="pl-3"><h1 className="font-poppins font-semibold text-2xl">Free Shipping</h1><p  className="font-poppins font-medium text-xl text-[#898989]">Order over 150 $</p></div></div>
  <div className="justify-center flex"><img src="/images/customersupport.svg" alt="Customer Support" /><div className="pl-3"><h1 className="font-poppins font-semibold text-2xl">24 / 7 Support</h1><p  className="font-poppins font-medium text-xl text-[#898989] m1-3">Dedicated support</p></div></div>
</div>
      <FooterPage />
    </div>
  );
};

export default ShopPage;
