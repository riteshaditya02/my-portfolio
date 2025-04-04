import React from 'react';

const Footer = () => {
  return (
    <footer className="left-0 w-full p-4 mt-auto text-white bg-primary">
      <div className="container mx-auto text-center">
        <div className="mb-2">
          <a href="https://github.com/riteshaditya02" className="mx-2 hover:text-blue-400">GitHub</a>
          <a href="https://www.linkedin.com/in/riteshaditya02/" className="mx-2 hover:text-blue-400">LinkedIn</a>
          <a href="mailto:griteshaditya@gmail.com" className="mx-2 hover:text-blue-400">Email</a>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Ritesh Aditya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
