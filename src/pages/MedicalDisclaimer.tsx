import React from 'react';
import { AlertTriangle } from 'lucide-react';

const MedicalDisclaimer = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Medical Disclaimer</h1>
        </div>

        <div className="prose max-w-none">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <p className="text-lg font-semibold text-yellow-700">
              The information provided by MedIdentify is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </div>

          <h2>Important Notice</h2>
          <p>
            Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition or medication.
          </p>

          <h2>Limitations of Our Service</h2>
          <ul>
            <li>Our AI-powered identification system is not 100% accurate</li>
            <li>Results should be verified by healthcare professionals</li>
            <li>Medication appearance may vary by manufacturer and region</li>
            <li>Lighting and image quality can affect identification accuracy</li>
          </ul>

          <h2>Do Not Use MedIdentify For</h2>
          <ul>
            <li>Emergency medical situations</li>
            <li>Self-diagnosis or treatment decisions</li>
            <li>Replacing professional medical advice</li>
            <li>Determining medication authenticity</li>
          </ul>

          <h2>Emergency Situations</h2>
          <p>
            In case of a medical emergency:
          </p>
          <ul>
            <li>Call your local emergency services immediately</li>
            <li>Contact your healthcare provider</li>
            <li>Visit the nearest emergency room</li>
          </ul>

          <h2>Healthcare Professional Consultation</h2>
          <p>
            Always consult with a qualified healthcare professional:
          </p>
          <ul>
            <li>Before starting any medication</li>
            <li>When changing dosage</li>
            <li>If experiencing side effects</li>
            <li>When combining medications</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h2 className="text-xl font-bold mb-4">Your Safety is Our Priority</h2>
            <p>
              While we strive to provide accurate information, the final decision about medication use should always be made in consultation with qualified healthcare professionals who are familiar with your medical history and current condition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalDisclaimer;