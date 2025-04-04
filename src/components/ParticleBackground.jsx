import React from 'react';
import ParticleAnimation from 'react-particle-animation';

function ParticleBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <ParticleAnimation
        numParticles={100}
        interactive={true}
        color={{
          r: 158,
          g: 217,
          b: 249,
          a: 255
        }}
        background={{
          r: 21,
          g: 22,
          b: 23,
          a: 1
        }}
      />
    </div>
  );
}

export default ParticleBackground;
