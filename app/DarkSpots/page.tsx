import { FC } from 'react';

interface DarkSpot {
  x: number; // percent from left
  y: number; // percent from top
}

const darkSpots: DarkSpot[] = [
  { x: 20, y: 30 }, // Example spot
  { x: 55, y: 50 },
  { x: 75, y: 70 },
];

const MapPage: FC = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto p-4">
      {/* SJSU Campus Map */}
      <img
        src="SJSULightMap.png" // <-- make sure you have a real map image here
        className="w-full h-auto rounded-md shadow-lg"
      />

      {/* Red Circles for Dark Spots */}
      {darkSpots.map((spot, index) => (
        <div
          key={index}
          className="absolute bg-red-500 rounded-full opacity-70"
          style={{
            width: '20px',
            height: '20px',
            left: `${spot.x}%`,
            top: `${spot.y}%`,
            transform: 'translate(-50%, -50%)', // Center the dot
          }}
        ></div>
      ))}
    </div>
  );
};

export default MapPage;
