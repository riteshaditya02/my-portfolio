import React from 'react';

const Skills = () => {
  const skills = {
    programming: ["C", "C++", "Python", "Java", "PHP"],
    webDev: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Angular", "Laravel"],
    database: ["MySQL", "MongoDB"],
    tools: ["Terminal", "Visual Studio Code", "Git", "Xampp"]
  };

  return (
    <section className="min-h-screen px-4 py-20 bg-primary text-custom-allText">
      <div className="container max-w-4xl mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center text-custom-heading">Skills & Expertise</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="backdrop-blur-md bg-white/10 p-6 rounded-lg shadow-lg border border-white/20">
            <h3 className="mb-4 text-xl font-bold text-custom-heading">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.programming.map((skill, index) => (
                <span key={index} className="px-3 py-1 text-blue-800 bg-blue-100 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="backdrop-blur-md bg-white/10 p-6 rounded-lg shadow-lg border border-white/20">
            <h3 className="mb-4 text-xl font-bold text-custom-heading">Web Development</h3>
            <div className="flex flex-wrap gap-2">
              {skills.webDev.map((skill, index) => (
                <span key={index} className="px-3 py-1 text-green-800 bg-green-100 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="backdrop-blur-md bg-white/10 p-6 rounded-lg shadow-lg border border-white/20">
            <h3 className="mb-4 text-xl font-bold text-custom-heading">Database Management</h3>
            <div className="flex flex-wrap gap-2">
              {skills.database.map((skill, index) => (
                <span key={index} className="px-3 py-1 text-purple-800 bg-purple-100 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="backdrop-blur-md bg-white/10 p-6 rounded-lg shadow-lg border border-white/20">
            <h3 className="mb-4 text-xl font-bold text-custom-heading">Developer Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill, index) => (
                <span key={index} className="px-3 py-1 text-yellow-800 bg-yellow-100 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
