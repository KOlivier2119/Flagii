import React from 'react'
import { FaClock, FaFlag, FaRocket } from 'react-icons/fa'

const Landing = () => {
  return (
    <>
      <div className='bg-slate-700 w-screen h-screen'>
        <nav className="flex justify-between items-center bg-slate-800 text-white px-6 py-3 w-[80%] m-auto border border-slate-600 rounded-full shadow-md ">
          <h1 className="text-3xl font-extrabold tracking-wider text-slate-100">Flagii</h1>

          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#" className="hover:text-slate-300 transition duration-300 ease-in-out">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-slate-300 transition duration-300 ease-in-out">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-300 transition duration-300 ease-in-out">Get Started</a>
            </li>
          </ul>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <button id="mobile-menu-button" className="focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
        <div className='flex flex-col justify-center items-center h-[80vh]'>
          <h1 className='text-white text-4xl'><span className='text-green-500 text-4xl'>Welcome to Flagii where you can</span> discover the capital city of every country.</h1>
          <button className='bg-green-500 text-white px-6 py-3 mt-4 rounded-2xl hover:bg-green-600 transition-all duration-500'>Get started</button>
        </div>
      </div>
      <section id='about' className='h-[60vh] my-auto'>
        <h1 className='text-center text-3xl text-green-500 font-bold py-8'>About Flagii</h1>
        <div className='flex flex-col md:flex-row justify-between gap-6 p-4'>
          <div className='flex flex-col border  shadow-lg rounded-md p-4 hover:translate-x-1 hover:translate-y-2 transition-all duration-500'>
            <h1 className='text-2xl text-green-500 font-bold'><FaFlag className='inline pr-2'/>Capital City Discovery</h1>
            <p>You can discover every capital city of the city by just entering a picture of the flag.</p>
          </div>
          <div className='flex flex-col border shadow-lg rounded-md p-4 hover:translate-x-1 hover:translate-y-2 transition-all duration-500'>
            <h1 className='text-2xl text-green-500 font-bold'><FaRocket className='inline pr-2'/>Easy to Use and Fast</h1>
            <p>It is straight forward and you can use it without complex guidance.</p>
          </div>
          <div className='flex flex-col border shadow-lg rounded-md p-4 hover:translate-x-1 hover:translate-y-2 transition-all duration-500'>
            <h1 className='text-2xl text-green-500 font-bold'><FaClock className='inline pr-2'/>Simplicity</h1>
            <p>It is very simple and flexible and available for mobiles.</p>
          </div>
        </div>
      </section>
     <section></section>
    </>
  )
}

export default Landing
