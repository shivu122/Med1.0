import React from 'react';
import { Shield, Users, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About MedIdentify</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-8">
            MedIdentify is a cutting-edge medicine identification platform that leverages advanced AI technology to help users identify medications and access crucial information about their uses, dosages, and potential warnings.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Shield className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p className="text-gray-600">
                We prioritize user safety by providing accurate medication information from reliable sources.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">User-Focused</h3>
              <p className="text-gray-600">
                Our platform is designed to be accessible and easy to use for everyone.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Heart className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Healthcare Innovation</h3>
              <p className="text-gray-600">
                We're committed to improving healthcare through technological innovation.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            Our mission is to empower individuals with accurate medication information, promoting safer medication use and better health outcomes. We believe that everyone should have access to reliable medication information at their fingertips.
          </p>

          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-700 mb-6">
            Using advanced AI technology powered by Google's Gemini API, MedIdentify can analyze images of medications and provide detailed information about:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Medication identification</li>
            <li>Common uses and purposes</li>
            <li>Recommended dosages</li>
            <li>Important warnings and precautions</li>
            <li>Potential side effects</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Important Note</h2>
            <p className="text-gray-700">
              While we strive to provide accurate information, MedIdentify should not be used as a substitute for professional medical advice. Always consult with a healthcare provider before making any decisions about medication use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;