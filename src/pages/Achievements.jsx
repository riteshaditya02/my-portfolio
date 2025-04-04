import React from 'react';

const Achievements = () => {
  const achievements = [
    "Silver Medalist in Indo-Sri Lanka Championship",
    "Recognized National Athlete in various events",
    "Black Belt Sho-Dan in Okinawa Uechi Ryu Karate Do Kenyukai Japan",
    "Joint Secretary of YfS Silicon Chapter"
  ];

  return (
    <div className="min-h-screen bg-primary py-20 px-4 flex items-center">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-custom-heading">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 p-6 rounded-lg shadow-lg border border-white/20 hover:shadow-xl transition">
              <p className="text-xl font-semibold text-custom-allText">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
