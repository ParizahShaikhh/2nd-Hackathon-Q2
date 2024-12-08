import React from 'react'
import HeaderPage from '../components/NavBar';
import FooterPage from '../components/Footer';
import Link from 'next/link';

const Cart = () => {
  return (
    <div  className="min-h-screen bg-white">
      <HeaderPage />
      <div className=" bg-white">
        <img src="/images/bb2.png" alt="Shop Banner" />
      </div>
      <div>
        <h1 className="font-poppins font-medium text-5xl">Cart</h1>
        <h3 className="font-poppins font-medium text-xl">Home</h3>
        <img src="/images/greater.svg" alt="file route" />
        <p className="font-poppins font-light text-xl">Cart</p>
      </div>
      <div>
        <div className='bg-white'>
          <div className='bg-[#F9F1E7] mx-[300px]'><ul className='flex justify-center gap-9 p-4'><li className='font-poppins font-medium text-xl text-black flex justify-center  px-3 py-2 '>Product</li>
          <li className='font-poppins font-medium text-xl text-black flex justify-center  px-3 py-2'>Price</li>
          <li className='font-poppins font-medium text-xl text-black flex justify-center  px-3 py-2'>Quantity</li>
          <li className='font-poppins font-medium text-xl text-black flex justify-center  px-3 py-2'>Subtotal</li></ul></div>
        <div><img src="/images/cartdiv2.svg" alt="cart product picture" />
        <div className='flex justify-center gap-6 m-3'>
        <div className='font-poppins font-normal text-sm text-[#9F9F9F] flex justify-center px-3 py-2'>Asgaard sofa</div>
        <div className='font-poppins font-normal text-sm text-[#9F9F9F] flex justify-center px-3 py-2'>Rs. 250,000.00</div>
        <h4 className='font-poppins font-normal text-sm border-[#9F9F9F] border px-3 py-2 '>1</h4>
        <div className='font-poppins font-normal text-sm text-black flex justify-center  px-3 py-2'>Rs. 250,000.00</div>
        <div><img src="/images/bin.svg" alt="bin" /></div>
        
        </div>
       
        </div>
        
        </div>
        <div  className='bg-[#F9F1E7]  w-[300px] h-[300px]  border border-black gap-4'><h1 className='bg-[#F9F1E7] font-poppins font-semibold text-4xl text-black flex justify-center px-3 py-2'>Cart Totals</h1>
        <p className='font-poppins font-medium text-sm'>Subtotal</p>
        <p className='font-poppins font-medium text-sm text-[#9F9F9F]'>Rs. 250,000.00</p>
        <p className='font-poppins font-medium text-sm'>Total</p>
        <p className='font-poppins font-medium text-sm text-[#B88E2F]'>Rs. 250,000.00</p>
        <Link href="/checkout">
        <button className='bg-[#F9F1E7] font-poppins font-normal text-xl  border border-black p-4 rounded-xl'>Check Out</button>
        
      </Link>
      </div>
       
      </div>
      <div className="bg-[#FAF3EA] grid grid-cols-1 lg:grid-cols-4 p-9">
  <div className="justify-center flex"><img src="/images/trophy1.svg" alt="trophy" /><div className="pl-3"><h1 className="font-poppins font-semibold text-2xl">High Quality</h1><p className="font-poppins font-medium text-xl text-[#898989] m1-3">crafted from top materials</p></div></div>
  <div className="justify-center flex"><img src="/images/guarantee.svg" alt="Guarantee" /><div className="pl-3"><h1 className="font-poppins font-semibold text-2xl">Warranty Protection</h1><p className="font-poppins font-medium text-xl text-[#898989] m1-3">Over 2 years</p></div></div>
  <div className="justify-center flex"><img src="/images/shipping.svg" alt="Shipping" /><div className="pl-3"><h1 className="font-poppins font-semibold text-2xl">Free Shipping</h1><p  className="font-poppins font-medium text-xl text-[#898989]">Order over 150 $</p></div></div>
  <div className="justify-center flex"><img src="/images/customersupport.svg" alt="Customer Support" /><div className="pl-3"><h1 className="font-poppins font-semibold text-2xl">24 / 7 Support</h1><p  className="font-poppins font-medium text-xl text-[#898989] m1-3">Dedicated support</p></div></div>
</div>
      <FooterPage />
    </div>
  )
}

export default Cart;
