import React from 'react';

const Experience = () => {
  return (
    <div className="flex items-center min-h-screen px-4 py-20 bg-primary">
      <div className="container max-w-4xl mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center text-custom-heading">Experience</h2>
        <div className="p-8 border rounded-lg shadow-lg backdrop-blur-md bg-white/10 border-white/20">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-custom-heading">Associate Consultant</h3>
            <p className="text-xl text-custom-allText">Invincix Solutions</p>
            <p className="text-custom-allText">August 2024 - Present</p>
            <div className="mt-4">
              <h4 className="mb-2 font-bold text-custom-heading">Key Responsibilities:</h4>
              <ul className="space-y-2 list-disc list-inside text-custom-allText">
                <li>Develop and maintain backend functionalities</li>
                <li>Create REST APIs for seamless integration</li>
                <li>Optimize SQL queries and server-side scripts</li>
                <li>Assist in migrating legacy systems to modern frameworks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
