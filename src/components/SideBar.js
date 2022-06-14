import React from 'react';
import Email from './icons/Email';
import LinkedIn from './icons/LinkedIn';
import GitHub from './icons/GitHub';

const SideBar = () => {
  return (
    <aside class="md:flex flex-col justify-between w-12 p-1 md:fixed min-h-screen hidden">
      <div>
      </div>
      <div className="flex flex-col align-middle">
        <a 
          href="mailto:kl.spinolah@gmail.com" 
          className="mb-3 h-14 w-14 bg-white rounded-full flex items-center justify-center hover:bg-secondary group"
          aria-label="Email"                
        >
          <Email classes="text-primary h-10 w-10 group-hover:text-pink-500" />
        </a>
        <a 
          href="https://www.linkedin.com/in/karina-espinola/" 
          className="mb-3 h-14 w-14 bg-white rounded-full flex items-center justify-center hover:bg-secondary group"
          aria-label="LinkedIn"
        >
          <LinkedIn classes="text-primary h-11 w-11 group-hover:text-pink-500" />
        </a>
        <a 
          href="https://github.com/karinaespinola"
          className="mb-3 h-14 w-14 bg-white rounded-full flex items-center justify-center hover:bg-secondary group"
          aria-label="GitHub"
        >
          <GitHub classes="text-primary h-10 w-10 group-hover:text-pink-500" />
        </a>
      </div>
    </aside>
  )
}

export default SideBar