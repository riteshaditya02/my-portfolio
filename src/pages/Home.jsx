import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <section id="home" className="flex items-center justify-center min-h-screen bg-primary">
      <div className="container flex flex-col items-center px-6 mx-auto md:flex-row">
      <div className="mt-8 md:w-1/2 md:mt-0">
          <img 
            src="../../assets/profile.jpg"
            alt="Ritesh Aditya" 
            className="w-64 h-64 mx-auto border-4 border-white rounded-md shadow-lg"
          />
        </div>
        <div className="text-center text-white md:w-1/2 md:text-left">
          <h1 className="mb-4 text-5xl font-bold">Hi, I'm Ritesh Aditya</h1>
          <h2 className="mb-6 text-2xl">Full Stack Developer | Backend Specialist</h2>
          <p className="mb-8 text-xl">Associate Consultant at Invincix Solutions</p>
          <p className="mb-8 text-lg">Passionate B.Tech. graduate with expertise in multiple programming languages and web technologies</p>
          <div className="space-x-4">
            <a href="/projects" className="px-6 py-3 font-bold text-blue-600 bg-white rounded-full hover:bg-opacity-90">View My Resume</a>
            <a href="/contact" className="px-6 py-3 font-bold text-white border-2 border-white rounded-full hover:bg-white hover:text-blue-600">Contact Me</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
