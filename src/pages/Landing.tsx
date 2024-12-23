import React from 'react';
import { Link } from 'react-router-dom';
import { Pill, Camera, Shield, Heart } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-32">
        <div className="text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            <Pill className="h-16 w-16 text-purple-600 animate-float" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Identify Your Medicine
            <br />
            <span className="text-purple-600">With Confidence</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Upload or capture images of your medicine to get instant, accurate information about uses, dosages, and important warnings.
          </p>
          <Link
            to="/identify"
            className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-300"
          >
            <Camera className="mr-2 h-5 w-5" />
            Start Identifying
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-purple-50 rounded-xl transform hover:scale-105 transition-transform duration-300">
              <Camera className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Identification</h3>
              <p className="text-gray-600">
                Simply upload a photo or use your camera to identify medications instantly.
              </p>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl transform hover:scale-105 transition-transform duration-300">
              <Shield className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">
                Your privacy is our priority. All images are processed securely and not stored.
              </p>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl transform hover:scale-105 transition-transform duration-300">
              <Heart className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Detailed Information</h3>
              <p className="text-gray-600">
                Get comprehensive details about uses, dosages, and important warnings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;