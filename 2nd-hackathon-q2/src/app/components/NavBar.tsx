import React from 'react'
import Link from 'next/link';

const HeaderPage = () => {
  return (
    <header className="bg-white text-black">
      <div className="container mx-auto flex items-center justify-between py-4 px-2">
        {/* Logo */}
      <div className="space-x-4">
          <img src='/images/logo.svg' alt='logo' className="hover:text-gray-300"
          />
         
        </div>
        {/* BrandName */}
        <div className="text-lg font-bold">
          <Link href="/">Furniro</Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-gray-300">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-300">
                Blog
              </Link>
            </li>
            <li>
            <Link href="/checkout">
            <Link href="/contact" className="hover:text-gray-300">
                Contact
              </Link>
        
      </Link>
              
            </li>
          </ul>
        </nav>

        {/* Icons */}
        <div className="space-x-6 flex justify-center">
        <Link href="/cart">
       
        <img 
          src="/images/user.svg" 
          alt="About Page Icon"
          style={{ cursor: 'pointer' }}
        />
      </Link>
          <img src='/images/search.svg' alt='search' className="hover:text-gray-300"
          />
          <img src='/images/heart.svg' alt='wishlist' className="hover:text-gray-300"
          />
          <Link href="/cart">
       
          <img src='/images/cart.svg' alt='cart' className="hover:text-gray-300"
          />
     </Link>
         
        </div>
      </div>
    </header>
  )
}

export default HeaderPage;
