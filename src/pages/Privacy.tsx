import React from 'react';

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto prose">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <p className="text-lg text-gray-700 mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2>Information We Collect</h2>
        <p>
          When you use MedIdentify, we collect:
        </p>
        <ul>
          <li>Images you upload or capture for medicine identification</li>
          <li>Device information necessary for service functionality</li>
          <li>Usage data to improve our services</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>
          We use your information to:
        </p>
        <ul>
          <li>Provide medicine identification services</li>
          <li>Improve our AI model accuracy</li>
          <li>Enhance user experience</li>
          <li>Ensure platform security</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We implement robust security measures to protect your data:
        </p>
        <ul>
          <li>Encryption of data in transit and at rest</li>
          <li>Regular security audits</li>
          <li>Strict access controls</li>
          <li>Secure image processing</li>
        </ul>

        <h2>Image Retention</h2>
        <p>
          Images uploaded to our service are:
        </p>
        <ul>
          <li>Processed immediately for identification</li>
          <li>Not stored permanently on our servers</li>
          <li>Deleted after analysis is complete</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>
          We use Google's Gemini API for image analysis. Their privacy policy applies to the processing of images through their service.
        </p>

        <h2>Your Rights</h2>
        <p>
          You have the right to:
        </p>
        <ul>
          <li>Access your data</li>
          <li>Request data deletion</li>
          <li>Opt-out of data collection</li>
          <li>Request data correction</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          For privacy-related questions or concerns, contact us at:
          <br />
          privacy@medidentify.com
        </p>
      </div>
    </div>
  );
};

export default Privacy;