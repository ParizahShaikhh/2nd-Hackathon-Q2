"use client";
import React from 'react'
import HeaderPage from '../components/NavBar';
import FooterPage from '../components/Footer';

const BlogPage = () => {
  return (
    <div className='bg-white h-min-screen'>
      <HeaderPage />
      <div>
      <div className=''><img src="/images/bb2.png" alt="Blog Banner" className='w-full h-48' /></div>
      <div><h1>Blog</h1>
      <span>Home</span> <span>&gt;</span> <span>Blog</span>
      </div>
      <div className=''>
        <div className=''><img src="/images/blog1.svg" alt="blog 1" /></div>
      <div><div><img src="/images/adminblog.svg" alt="Admin" />Admin</div>
      <div><img src="/images/blogcalendar.svg" alt="Calendar" />14 Oct 2022</div>
      <div><img src="/images/blogtag.svg" alt="Tag" />Wood</div></div>
      <div><h1>Going all-in with millennial design</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p><h3>Read more</h3><span>__________</span>
      </div>
      
        <div><img src="/images/blog2.svg" alt="blog 2" /></div>
      <div><div><img src="/images/adminblog.svg" alt="Admin" />Admin</div>
      <div><img src="/images/blogcalendar.svg" alt="Calendar" />14 Oct 2022</div>
      <div><img src="/images/blogtag.svg" alt="Tag" />Handmade</div></div>
      <div><h1>Exploring new ways of decorating</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p><h3>Read more</h3><span>__________</span>
      </div>
      
        <div><img src="/images/blog3.svg" alt="blog 3" /></div>
      <div><div><img src="/images/adminblog.svg" alt="Admin" />Admin</div>
      <div><img src="/images/blogcalendar.svg" alt="Calendar" />14 Oct 2022</div>
      <div><img src="/images/blogtag.svg" alt="Tag" />Wood</div></div>
      <div><h1>Handmade pieces that took time to make</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p><h3>Read more</h3><span>__________</span>
      </div>
      <div>sidebar</div>

    </div></div>      <div><div></div>
      <div></div>
      <div></div>
      <div></div></div>

      <div className='grid lg:grid-cols-1 grid-cols-1'><h1>Recent Posts</h1>
      <div><img src="/images/side1.svg" alt="sidebar 2 pic 1" /></div>
      <div><img src="/images/side1.svg" alt="sidebar 2 pic 2" /></div>
      <div><img src="/images/side1.svg" alt="sidebar 2 pic 3" /></div>
      <div><img src="/images/side1.svg" alt="sidebar 2 pic 4" /></div>
      <div><img src="/images/side1.svg" alt="sidebar 2 pic 5" />
      <div><h3>Going all-in with millennial design</h3><p>03 Aug 2022</p></div>
      <div><h3>Exploring new ways of decorating</h3><p>03 Aug 2022</p></div>
      <div><h3>Handmade pieces that took time to make</h3><p>03 Aug 2022</p></div>
      <div><h3>Modern home in Milan</h3><p>03 Aug 2022</p></div>
      <div><h3>Colorful office redesign</h3><p>03 Aug 2022</p></div></div>
      </div>
      
      <FooterPage /></div>
  )
}

export default BlogPage;