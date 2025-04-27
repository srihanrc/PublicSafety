'use client';

import { FC, useEffect, useState } from 'react';

interface DarkSpot {
  x: number;
  y: number;
}

const MapPage: FC = () => {
  const [darkSpots, setDarkSpots] = useState<DarkSpot[]>([]);

  useEffect(() => {
  async function fetchDarkSpots() {
    try {
      const res = await fetch('/api/darkspots');
      const data = await res.json();
      setDarkSpots(data);
    } catch (error) {
      console.error('Failed to fetch dark spots:', error);
    }
  }

    fetchDarkSpots();
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto p-4">
      <img src="/SJSULightMap.png" className="w-full h-auto rounded-md shadow-lg" />
      
      {darkSpots.map((spot, idx) => (
        <div
          key={idx}
          className="absolute bg-red-600 rounded-full opacity-80"
          style={{
            width: '50px',
            height: '50px',
            left: `${spot.x}%`,
            top: `${spot.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
      ))}
    </div>
  );
};

export default MapPage;