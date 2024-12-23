import React from 'react';
import ImageUpload from '../components/ImageUpload';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Medicine Identifier
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Upload or capture an image of your medicine to get detailed information about its uses, dosage, and important warnings.
        </p>
      </div>
      <ImageUpload />
    </div>
  );
};

export default Home;