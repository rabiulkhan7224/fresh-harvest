import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Twitter, Facebook, Instagram } from 'lucide-react'; 

const Footer = () => {
    return (
       <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="mb-4">
              <Image
                src="/logo.png" // Replace with your actual logo path
                alt="Fresh Harvests Logo"
                width={150} // Adjust based on your logo's size
                height={40} // Adjust based on your logo's size
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-600 text-sm mt-2">
              Bringing the freshest, highest-quality produce directly from our farms to your table.
            </p>
          </div>

          {/* Quick Links 1 */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-gray-800 text-lg mb-4">Quick links 1</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-green-700 transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-600 hover:text-green-700 transition-colors text-sm">Shop</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-green-700 transition-colors text-sm">About us</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-green-700 transition-colors text-sm">Blog</Link>
              </li>
              <li>
                <Link href="/blog/detail" className="text-gray-600 hover:text-green-700 transition-colors text-sm">Detail Blog</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-gray-800 text-lg mb-4">Quick links 2</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/favorites" className="text-gray-600 hover:text-green-700 transition-colors text-sm">Favorites</Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-600 hover:text-green-700 transition-colors text-sm">Cart</Link>
              </li>
              <li>
                <Link href="/signin" className="text-gray-600 hover:text-green-700 transition-colors text-sm">Sign in</Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-600 hover:text-green-700 transition-colors text-sm">Register</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-gray-800 text-lg mb-4">Contact us</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start text-gray-600 text-sm">
                <Phone className="h-4 w-4 mr-2 text-green-600" /> 1234 5678 90
              </li>
              <li className="flex items-center justify-center md:justify-start text-gray-600 text-sm">
                <Mail className="h-4 w-4 mr-2 text-green-600" /> freshharvests@gmail.com
              </li>
              <li className="flex items-start justify-center md:justify-start text-gray-600 text-sm">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-green-600 flex-shrink-0" /> Tanjung Sari Street, Pontianak, Indonesia
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-8">
          {/* Download App Section
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <p className="text-gray-700 font-medium mb-3">Download App:</p>
            <div className="flex space-x-3">
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/app-store.png" // Replace with your actual App Store badge path
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </a>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/google-play.png" // Replace with your actual Google Play badge path
                  alt="Get it on Google Play"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Accepted Payment Methods */}
          {/* <div className="flex flex-col items-center md:items-end mb-6 md:mb-0">
            <p className="text-gray-700 font-medium mb-3">Accepted Payment Methods:</p>
            <div className="flex space-x-4">
              <Image src="/images/visa.png" alt="Visa" width={50} height={30} className="h-8 w-auto object-contain" />
              <Image src="/images/paypal.png" alt="PayPal" width={70} height={30} className="h-8 w-auto object-contain" />
              <Image src="/images/apple-pay.png" alt="Apple Pay" width={50} height={30} className="h-8 w-auto object-contain" />
            </div>
          </div> */} 
        </div>

        {/* Copyright and Social Media */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; Copyright 2024. All Rights Reserved by Banana Studio
          </p>
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;