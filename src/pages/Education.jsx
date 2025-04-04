import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-custom-heading">Education</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-custom-heading">Degree Name</h3>
            <p className="text-gray-600">University Name • Year - Year</p>
            <p className="text-gray-600">Relevant coursework or achievements</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
