import React from 'react';
import HeaderPage from "../components/NavBar";
import FooterPage from "../components/Footer";

const ProductDetailpage = () => {
  return (
    <div className='bg-white min-h-screen'>
        <HeaderPage />
        <div className='bg-[#F9F1E7] pl-5 gap-6'><span>Home</span><span>&gt;</span><span>Shop</span><span>&gt;</span><span>|</span><span>Asgaard sofa</span></div>
        <FooterPage />

    </div>
  )
}

export default ProductDetailpage;
