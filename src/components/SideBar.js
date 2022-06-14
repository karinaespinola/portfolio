import React from 'react';
import Email from './icons/Email';
import LinkedIn from './icons/LinkedIn';
import GitHub from './icons/GitHub';

const SideBar = () => {
  return (
    <aside class="md:flex flex-col justify-between w-12 p-1 md:fixed min-h-screen sm:hidden">
      <div>
        <div className="h-5" />
        <img  src="/assets/star.svg" alt="Cali Espinola" title="Cali Espinola" />
      </div>
      <div className="flex flex-col align-middle">
        <Email />
        <LinkedIn />
        <GitHub />
      </div>
    </aside>
  )
}

export default SideBar