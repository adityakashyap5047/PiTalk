import React from 'react';

const TermsOfService = () => {
  return (
    <div className="bg-gradient-linear from-[#080F58] via-purple-500 to-[#080F58] bg-[length:200%_200%] animate-bg-gradient text-gray-800 py-10 px-4">
      <div className="container mx-auto max-w-4xl shadow-md rounded-md p-6">
        <h1 className="text-3xl font-bold text-[#8ec0e8] mb-6">Terms of Service</h1>
        <p className="mb-4 text-gray-800">
          Welcome to PiTalk. These Terms of Service govern your use of our website, services, and products. By using PiTalk, you agree to comply with these Terms.
        </p>

        <h2 className="text-2xl font-semibold text-[#2fdab2] mb-4">Acceptance of Terms</h2>
        <p className="mb-4 text-[#8ec0e8]">
          By accessing or using our website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please discontinue use of our services.
        </p>

        <h2 className="text-2xl font-semibold text-[#2fdab2] mb-4">User Responsibilities</h2>
        <p className="mb-4 text-gray-800">
          As a user of PiTalk, you agree to:
        </p>
        <ul className="list-disc pl-6 mb-4 text-[#8ec0e8]">
          <li>Provide accurate and up-to-date information when creating an account.</li>
          <li>Maintain the confidentiality of your account credentials.</li>
          <li>Use PiTalk responsibly and in compliance with applicable laws.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#2fdab2] mb-4">Prohibited Activities</h2>
        <p className="mb-4 text-gray-800">
          You may not engage in any activity that:
        </p>
        <ul className="list-disc pl-6 mb-4 text-[#8ec0e8]">
          <li>Violates any laws or regulations.</li>
          <li>Harms or exploits other users.</li>
          <li>Compromises the security of our platform.</li>
          <li>Involves unauthorized access to PiTalk systems.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#2fdab2] mb-4">Intellectual Property</h2>
        <p className="mb-4 text-[#8ec0e8]">
          All content, trademarks, and logos on PiTalk are the property of their respective owners. You may not reproduce, distribute, or use our content without prior written consent.
        </p>

        <h2 className="text-2xl font-semibold text-[#2fdab2] mb-4">Limitation of Liability</h2>
        <p className="mb-4 text-[#8ec0e8]">
          PiTalk shall not be liable for any damages resulting from your use of our website or services. Use PiTalk at your own risk.
        </p>

        <h2 className="text-2xl font-semibold text-[#2fdab2] mb-4">Termination</h2>
        <p className="mb-4 text-[#8ec0e8]">
          We reserve the right to suspend or terminate your access to PiTalk at any time if you violate these Terms or engage in any unlawful activity.
        </p>

        <h2 className="text-2xl font-semibold text-[#2fdab2] mb-4">Changes to the Terms</h2>
        <p className="mb-4 text-[#8ec0e8]">
          We may update these Terms from time to time. Any changes will be posted on this page, and your continued use of PiTalk constitutes your acceptance of the updated Terms.
        </p>

        <h2 className="text-2xl font-semibold text-[#2fdab2] mb-4">Contact Us</h2>
        <p className="text-[#8ec0e8]">
          If you have any questions about these Terms, please Contact Us.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;

export const metadata = {
    title: 'Terms of Service - PiTalk',
    description: 'Learn about the terms that govern your use of PiTalk services and products.',
};