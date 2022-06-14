import React from 'react';
import Menu from './icons/Menu';
import CloseMenu from './icons/CloseMenu';

export default function Nav({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img  src="/assets/star.svg" alt="Cali Espinola" title="Cali Espinola" />
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            > 
              <div className={`menu-icon-wrapper  justify-center align-middle flex-col ${navbarOpen ? 'open-menu' : ''}`}>
                <span className="w-6 h-1 bg-white rounded-sm transition-all block mb-1"></span>
                <span className="w-6 h-1 bg-white rounded-sm transition-all block mb-1"></span>
                <span className="w-6 h-1 bg-white rounded-sm transition-all block"></span>   
              </div>          
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#about"
                >
                  0. About Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#weapons"
                >
                  1. Weapons of choice
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#contact"
                >
                  2. Let's Talk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
