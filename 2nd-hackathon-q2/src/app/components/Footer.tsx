import React from 'react'

const FooterPage = () => {
  return (
    <div className='border-t-2 mt-4'>
       <footer className="bg-white text-black py-8 w-full">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
            {/* Exclusive Section */}
            <div>
              <h3 className="text-lg font-bold mb-2">Furniro.</h3>
              <p className="mb-2 font-poppins font-normal opacity-[50%]">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
              
              
            </div>
    

    
            {/* Account Section */}
            <div>
              <h3 className="text-lg font-bold mb-2 opacity-[50%]">Account</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Links</li>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
    
            {/* Quick Link Section */}
            <div>
              <h3 className="text-lg font-bold mb-2 opacity-[50%] text-black">Help</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
              </ul>
            </div>
             {/* Newsletter */}
          <div className=" rounded-md overflow-hidden">
            <h3 className='text-lg font-bold mb-2 opacity-[50%]'>NewsLetter</h3>
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-1/2l pr-3 py-2 pb-4 underline  bg-white text-black placeholder-gray-400 focus:outline-none"
                />
                <button className="bg-white text-black underline pr-4 py-2 w-2/2">
                SUBSCRIBE
                </button>
              </div>
           
            
          </div>
    
          {/* Copyright */}
          <div className="border-t-2 pt-4 mt-8 pl-[110px] text-sm text-gray-400 font-poppins font-normal">
            © 2023 furniro. All rights reverved
          </div>
         
        </footer> 
    </div>
  )
}

export default FooterPage;
