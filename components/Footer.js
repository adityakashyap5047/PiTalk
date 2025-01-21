const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 w-full">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} PiTalk. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="/privacy-policy" target="_blank" className="text-gray-400 hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
