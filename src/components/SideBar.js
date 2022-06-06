import React from 'react';
import Email from './icons/Email';
import LinkedIn from './icons/LinkedIn';
import GitHub from './icons/GitHub';

const SideBar = () => {
  return (
    <aside class="sticky h-full w-12">
      <div className='flex flex-col justify-start'>
        <div className="h-5" />
        <img  src="/assets/star.svg" alt="Cali Espinola" title="Cali Espinola" />
      </div>
      <div className="flex flex-col h-full justify-end align-middle">
        <Email />
        <LinkedIn />
        <GitHub />
      </div>
    </aside>
  )
}

export default SideBar