import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Welcome to the AR Ad Campaign</h1>
      <p className="text-lg mb-6 text-gray-700">
        Scan the QR code below to experience the future of interactive advertising!
      </p>

      {/* QR Code */}
      <img
        src="https://api.qrserver.com/v1/create-qr-code/?data=http://localhost:5173/ad-view&size=200x200"
        alt="QR Code to View AR Ad"
        className="mb-6"
      />

      <p className="text-sm text-gray-500">Scan with your mobile camera or <Link to="/ad-view" className="text-blue-600 underline">click here</Link> to view the AR ad directly.</p>
    </div>
  );
};

export default Home;
