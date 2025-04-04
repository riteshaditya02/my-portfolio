import React from 'react';

const About = () => {
  return (
    <div className="flex items-center min-h-screen px-4 py-20 bg-primary text-custom-allText">
      <div className="container max-w-4xl mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center text-custom-heading">About Me</h2>
        <div className="p-8 border rounded-lg shadow-lg backdrop-blur-md bg-white/10 border-white/20">
          <p className="mb-6 text-lg">
            Passionate B.Tech. graduate with practical experience as an Associate Consultant. 
            Skilled in full-stack development with a focus on backend technologies.
          </p>
          <p className="mb-6 text-lg">
            Currently working at Invincix Solutions, where I develop and maintain 
            robust backend systems and create seamless API integrations.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="mb-4 text-xl font-bold text-custom-heading">Education</h3>
              <p>B.Tech in CSE</p>
              <p>Silicon Institute of Technology</p>
              <p>2020-2024</p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-custom-heading">Location</h3>
              <p>Bhubaneswar</p>
              <p>Odisha, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
