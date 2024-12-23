import React from 'react';

const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto prose">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <p className="text-lg text-gray-700 mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using MedIdentify, you agree to be bound by these Terms of Service and all applicable laws and regulations.
        </p>

        <h2>2. Service Description</h2>
        <p>
          MedIdentify provides an AI-powered medicine identification service. The service is provided "as is" and we make no warranties about its accuracy or reliability.
        </p>

        <h2>3. User Responsibilities</h2>
        <ul>
          <li>Provide accurate information</li>
          <li>Use the service responsibly</li>
          <li>Not attempt to reverse engineer the service</li>
          <li>Not use the service for illegal purposes</li>
        </ul>

        <h2>4. Medical Disclaimer</h2>
        <p>
          MedIdentify is not a substitute for professional medical advice. Always consult healthcare professionals for medical decisions.
        </p>

        <h2>5. Intellectual Property</h2>
        <p>
          All content and functionality on MedIdentify is protected by intellectual property rights owned by us or our licensors.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          We are not liable for any damages arising from:
        </p>
        <ul>
          <li>Use or inability to use the service</li>
          <li>Incorrect identification results</li>
          <li>Medical decisions based on our service</li>
          <li>Service interruptions or errors</li>
        </ul>

        <h2>7. Modifications to Service</h2>
        <p>
          We reserve the right to modify or discontinue the service at any time without notice.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          These terms are governed by and construed in accordance with applicable laws.
        </p>

        <h2>9. Contact Information</h2>
        <p>
          For questions about these Terms, contact us at:
          <br />
          legal@medidentify.com
        </p>
      </div>
    </div>
  );
};

export default Terms;