import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-linear from-[#080F58] via-purple-500 to-[#080F58] bg-[length:200%_200%] animate-bg-gradient text-gray-800 py-10 px-4">
      <div className="container mx-auto max-w-4xl shadow-md rounded-md p-6">
        <h1 className="text-3xl font-bold text-[#8ec0e8] mb-6">Privacy Policy</h1>
        <p className="mb-4 text-gray-800">
          At PiTalk, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website.
        </p>

        <h2 className="text-2xl font-semibold text-[#2fdab2] mb-4">Information We Collect</h2>
        <p className="mb-4 text-gray-800">
          We may collect personal information such as your name, email address, and other details you provide when you:
        </p>
        <ul className="list-disc pl-6 mb-4 text-[#8ec0e8]">
          <li>Sign up for an account.</li>
          <li>Participate in forums or post content.</li>
          <li>Contact us for support or inquiries.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#2fdab2] mb-4">How We Use Your Information</h2>
        <p className="mb-4 text-gray-800">
          Your information is used to:
        </p>
        <ul className="list-disc pl-6 mb-4 text-[#8ec0e8]">
          <li>Provide and improve our services.</li>
          <li>Personalize your experience.</li>
          <li>Respond to your inquiries and provide support.</li>
          <li>Send you updates, announcements, or promotional materials.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#2fdab2] mb-4">Sharing Your Information</h2>
        <p className="mb-4 text-[#8ec0e8]">
          We do not sell, trade, or rent your personal information to others. However, we may share information with trusted third-party services to facilitate our services, such as hosting, analytics, and customer support.
        </p>

        <h2 className="text-2xl font-semibold text-[#2fdab2] mb-4">Cookies</h2>
        <p className="mb-4 text-[#8ec0e8]">
          PiTalk uses cookies to improve your experience. These cookies help us understand how you interact with our site, remember your preferences, and deliver personalized content.
        </p>

        <h2 className="text-2xl font-semibold text-[#2fdab2] mb-4">Your Rights</h2>
        <p className="mb-4 text-[#8ec0e8]">
          You have the right to access, update, or delete your personal information at any time. Please contact us if you wish to exercise your rights.
        </p>

        <h2 className="text-2xl font-semibold text-[#2fdab2] mb-4">Changes to This Policy</h2>
        <p className="mb-4 text-[#8ec0e8]">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
        </p>

        <h2 className="text-2xl font-semibold text-[#2fdab2] mb-4">Contact Us</h2>
        <p className="text-[#8ec0e8]">
          If you have any questions about this Privacy Policy, please Contact Us.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

export const metadata = {
  title: 'Privacy Policy - PiTalk',
  description: 'Learn how we collect, use, and safeguard your information when you use our website.',
};