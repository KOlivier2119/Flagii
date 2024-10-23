import { FaClock, FaFlag, FaRocket, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Landing = () => {
  return (
    <>
      <div className='bg-slate-700 w-screen h-screen'>
        {/* Navbar */}
        <nav className="flex justify-between items-center bg-slate-800 text-white px-6 py-3 w-[80%] m-auto border border-slate-600 rounded-full shadow-md">
          <h1 className="text-3xl font-extrabold tracking-wider text-slate-100">Flagii</h1>
          <ul className="hidden md:flex space-x-6">
            <li><a href="#" className="hover:text-slate-300 transition duration-300 ease-in-out">Home</a></li>
            <li><a href="#about" className="hover:text-slate-300 transition duration-300 ease-in-out">About</a></li>
            <li><a href="#explore" className="hover:text-slate-300 transition duration-300 ease-in-out">Explore</a></li>
          </ul>
        </nav>

        {/* Welcome Section */}
        <div className='flex flex-col justify-center items-center h-[80vh]'>
          <h1 className='text-white text-3xl text-center md:text-4xl'>
            <span className='text-yellow-400 text-4xl'>Welcome to Flagii where you can</span> discover the capital city of every country.
          </h1>
          <button className='bg-yellow-400 text-white px-6 py-3 mt-4 rounded-full hover:bg-yellow-300 transition-all duration-300 transform shadow-lg font-bold hover:scale-105'>Get started</button>
        </div>
      </div>

      {/* About Section */}
      <section id='about' className='h-[70vh] md:h-[55vh] my-auto pb-5'>
        <h1 className='text-center text-3xl text-yellow-400 font-bold py-8'>About Flagii</h1>
        <div className='flex flex-col md:flex-row justify-between gap-6 p-4'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='flex flex-col border shadow-lg rounded-md p-4 hover:translate-x-1 hover:translate-y-2 transition-all duration-300'
          >
            <h1 className='text-2xl text-yellow-400 font-bold'><FaFlag className='inline pr-2' />Capital City Discovery</h1>
            <p>You can discover every capital city of the city by just entering a picture of the flag.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='flex flex-col border shadow-lg rounded-md p-4 hover:translate-x-1 hover:translate-y-2 transition-all duration-300'
          >
            <h1 className='text-2xl text-yellow-400 font-bold'><FaRocket className='inline pr-2' />Easy to Use and Fast</h1>
            <p>It is straightforward and you can use it without complex guidance.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='flex flex-col border shadow-lg rounded-md p-4 hover:translate-x-1 hover:translate-y-2 transition-all duration-300'
          >
            <h1 className='text-2xl text-yellow-400 font-bold'><FaClock className='inline pr-2' />Simplicity</h1>
            <p>It is very simple and flexible and available for mobiles.</p>
          </motion.div>
        </div>
      </section>

      {/* Explore Section */}
      <section id='explore' className='bg-gradient-to-r from-indigo-900 via-slate-800 to-blue-900 h-auto mb-4 flex flex-col md:flex-row items-center justify-center space-x-8 p-6 rounded-lg shadow-xl'>
        <img
          src="https://flagcdn.com/w320/rw.png"
          alt="Rwandan flag"
          className="h-32 w-auto rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-110"
        />
        <div className='text-white text-left max-w-md'>
          <h2 className='text-4xl font-extrabold mb-3 leading-tight'>
            Explore Flags with <span className="text-yellow-400">Flagii</span>
          </h2>
          <p className='text-lg mb-5 text-center md:text-start'>
            Discover the world of flags, culture, and heritage through our amazing app. Show your national pride like never before!
          </p>
          <div className='flex justify-center items-center md:justify-start'>
            <button className='px-6 py-3 bg-yellow-400 text-slate-800 font-bold rounded-full shadow-lg hover:bg-yellow-300 transform transition-transform duration-300 hover:scale-105'>
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className='bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-900 py-6 mt-8 text-white'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>
          {/* Logo or App Name */}
          <div className='text-2xl font-bold'>
            Flagii <span className="text-yellow-400">App</span>
          </div>

          {/* Navigation Links */}
          <div className='flex space-x-6'>
            <a href="#" className='text-white hover:text-yellow-400 transition duration-300'>Home</a>
            <a href="#explore" className='text-white hover:text-yellow-400 transition duration-300'>Explore</a>
            <a href="#about" className='text-white hover:text-yellow-400 transition duration-300'>About Us</a>
            <a href="#" className='text-white hover:text-yellow-400 transition duration-300'>Contact</a>
          </div>

          {/* Social Media Icons */}
          <div className='flex space-x-4'>
            <a href="#" className='text-white hover:text-yellow-400 transition duration-300'>
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a href="#" className='text-white hover:text-yellow-400 transition duration-300'>
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="#" className='text-white hover:text-yellow-400 transition duration-300'>
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className='text-center text-sm text-gray-400 mt-6'>
          © 2024 Flagii App. All rights reserved.
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='fixed bottom-5 right-5 bg-yellow-400 p-3 rounded-full shadow-lg hover:bg-yellow-300 transition-all duration-300'
          aria-label="Back to top"
        >
          ↑
        </button>
      </footer>
    </>
  )
}

export default Landing;
