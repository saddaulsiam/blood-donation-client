import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 text-gray-800">
      <div className="mx-auto max-w-screen-xl px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          {/* Logo and Description */}
          <div className="flex flex-col items-center space-y-4 md:items-start">
            <h2 className="text-3xl font-extrabold text-primary">
              Blood Donation
            </h2>
            <p className="text-center text-lg text-gray-600 md:text-left">
              Connecting donors with those in need. Together, we save lives.
            </p>

            {/* Social Media Icons */}
            <div className="mt-6 flex justify-center space-x-8 md:justify-start">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl transition-colors hover:text-blue-600"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl transition-colors hover:text-blue-400"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl transition-colors hover:text-pink-500"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl transition-colors hover:text-blue-700"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center space-y-4 md:items-start">
            <h3 className="text-xl font-semibold text-gray-700">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-lg text-gray-600">
              <li>
                <a
                  href="#about"
                  className="transition duration-300 hover:text-red-500"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition duration-300 hover:text-red-500"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="transition duration-300 hover:text-red-500"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="transition duration-300 hover:text-red-500"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center space-y-4 md:items-start">
            <h3 className="text-xl font-semibold text-gray-700">
              Contact Information
            </h3>
            <ul className="mt-4 space-y-2 text-lg text-gray-600">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@blooddonation.com"
                  className="transition duration-300 hover:text-red-500"
                >
                  support@blooddonation.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+1234567890"
                  className="transition duration-300 hover:text-red-500"
                >
                  +1 234 567 890
                </a>
              </li>
              <li>Address: 123 Donation St, City, Country</li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 border-t pt-6 text-center text-gray-500">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Blood Donation. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
