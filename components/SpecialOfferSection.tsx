// components/SpecialOfferSection.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

// Helper function to format time (e.g., add leading zero)
const formatTime = (time: number) => {
  return time < 10 ? `0${time}` : time;
};

export const SpecialOfferSection: React.FC = () => {
  // Set the target date for the countdown. Adjust this as needed.
  // Example: 7 days from now. Replace with a specific future date if preferred.
  const TARGET_DATE_STRING = '2025-07-20T22:00:00+06:00'; // July 20, 2025, 10 PM GMT+6

  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date(TARGET_DATE_STRING); // Use a fixed target date string

    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
        // If the target date has passed, set all to 0
        timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

 
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [copied, setCopied] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // New state to track mount status

  useEffect(() => {
    setHasMounted(true); 
    setTimeLeft(calculateTimeLeft()); 

    const timer = setInterval(() => { 
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear interval if the component unmounts
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this runs once on client mount

  const handleCopyCode = () => {
    navigator.clipboard.writeText('FRESH28');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

 
  if (!hasMounted) {
    return (
        <section className="relative bg-gradient-to-r from-green-50 to-green-100 py-16 overflow-hidden rounded-lg shadow-inner my-12">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between relative z-10">
                {/* Text Content - Render structure but values might be placeholder or empty */}
                <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
                    <span className="inline-block bg-green-200 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                        Special Offer
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                        Seasonal Fruit Bundle
                    </h2>
                    <p className="text-3xl md:text-4xl font-extrabold text-green-700 mb-6">
                        Discount up to <span className="text-orange-500">80% OFF</span>
                    </p>

                    {/* Countdown Timer - Render static placeholder or empty values */}
                    <div className="flex justify-center lg:justify-start space-x-4 mb-8">
                        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                            <span className="block text-3xl font-bold text-gray-800">--</span>
                            <span className="block text-sm text-gray-500">Days</span>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                            <span className="block text-3xl font-bold text-gray-800">--</span>
                            <span className="block text-sm text-gray-500">Hour</span>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                            <span className="block text-3xl font-bold text-gray-800">--</span>
                            <span className="block text-sm text-gray-500">Min</span>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                            <span className="block text-3xl font-bold text-gray-800">--</span>
                            <span className="block text-sm text-gray-500">Second</span>
                        </div>
                    </div>

                    {/* Promo Code */}
                    <div className="flex justify-center lg:justify-start">
                        <Button
                            className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg text-lg flex items-center gap-2 transition-colors relative"
                            onClick={handleCopyCode}
                            disabled // Disable button until mounted
                        >
                            CODE : FRESH28
                        </Button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0">
                    <Image
                        src="/fruit-bundle.png"
                        alt="Seasonal Fruit Bundle"
                        width={600}
                        height={400}
                        priority
                    />
                </div>
            </div>
        </section>
    );
  }


  return (
    <section className="relative bg-gradient-to-r from-green-50 to-green-100 py-16 overflow-hidden rounded-lg shadow-inner my-12">
      {/* Background patterns/images based on the provided design */}
      <Image
        src="/leaf-top.png" // Path to your top background pattern if you have one
        alt="Background pattern"
        width={300}
        height={150}
        className="absolute top-0 left-0 opacity-10 hidden md:block"
        style={{ transform: 'rotate(180deg)' }}
      />
      <Image
        src="/leaf-top.png" // Path to your bottom background pattern if you have one
        alt="Background pattern"
        width={300}
        height={150}
        className="absolute bottom-0 right-0 opacity-10 hidden md:block"
      />

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
          <span className="inline-block bg-green-200 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Special Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Seasonal Fruit Bundle
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-green-700 mb-6">
            Discount up to <span className="text-orange-500">80% OFF</span>
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center lg:justify-start space-x-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <span className="block text-3xl font-bold text-gray-800">{formatTime(timeLeft.days)}</span>
              <span className="block text-sm text-gray-500">Days</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <span className="block text-3xl font-bold text-gray-800">{formatTime(timeLeft.hours)}</span>
              <span className="block text-sm text-gray-500">Hour</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <span className="block text-3xl font-bold text-gray-800">{formatTime(timeLeft.minutes)}</span>
              <span className="block text-sm text-gray-500">Min</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <span className="block text-3xl font-bold text-gray-800">{formatTime(timeLeft.seconds)}</span>
              <span className="block text-sm text-gray-500">Second</span>
            </div>
          </div>

          {/* Promo Code */}
          <div className="flex justify-center lg:justify-start">
            <Button
              className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg text-lg flex items-center gap-2 transition-colors relative"
              onClick={handleCopyCode}
            >
              CODE : FRESH28
              {copied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                  Copied!
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <Image
            src="/fruit-bundle.png" // Replace with your actual fruit bundle image
            alt="Seasonal Fruit Bundle"
            width={600} // Adjust based on your image dimensions
            height={400} // Adjust based on your image dimensions
            priority // Load this image earlier if it's above the fold
          />
        </div>
      </div>
    </section>
  );
};