import React from 'react';
// import { useTheme } from './ThemeProvider';

const Navbar = () => {
  // const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="top-0 left-0 z-50 w-full p-2 bg-primary">
      <div className="container flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center space-x-4">
          <a href="#home" className="w-16 h-16 p-0 m-0 nav">
            {/* <img src={darkMode ? "/assets/white-logo.png" : "/assets/black-logo.png"} alt="logo"/> */}
            <img src={"/assets/white-logo.png"} alt="logo"/>
            
          </a>
          <a href="#home" className="text-white nav-link hover:text-gray-300">Home</a>
          <a href="#about" className="text-white nav-link hover:text-gray-300">About</a>
          <a href="#experience" className="text-white nav-link hover:text-gray-300">Experience</a>
          <a href="#skills" className="text-white nav-link hover:text-gray-300">Skills</a>
          <a href="#projects" className="text-white nav-link hover:text-gray-300">Projects</a>
          <a href="#achievements" className="text-white nav-link hover:text-gray-300">Achievements</a>
          <a href="#contact" className="text-white nav-link hover:text-gray-300">Contact</a>
        </div>
        {/* <button   
          onClick={toggleDarkMode}
          className="p-2 rounded-lg text-custom-allText bg-custom-blue dark:bg-custom-navy"
        >
          {darkMode ? '🌞' : '🌙'}
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
