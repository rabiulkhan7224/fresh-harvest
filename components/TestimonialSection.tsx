'use client'; 
import React from 'react';
import Image from 'next/image';
import { Dot } from 'lucide-react'; 

export const TestimonialSection: React.FC = () => {
  
  const testimonial = {
    text: "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
    author: "Jane Doe",
    title: "Professional Chef",
    image: "/about.png", 
  };

  return (
    <section className="relative bg-white py-16 overflow-hidden">
      {/* Background elements */}
      <Image
        src="/leaf-top.png" 
        alt="Decorative Leaf"
        width={100}
        height={100}
        className="absolute top-10 left-10 opacity-70 hidden md:block"
      />
      <Image
        src="/leaf-top.png" 
        alt="Decorative Leaf"
        width={100}
        height={100}
        className="absolute top-10 right-10 opacity-70 hidden md:block"
        style={{ transform: 'rotate(90deg)' }}
      />
      
      <div className="absolute top-1/3 left-[28%] w-10 h-10 bg-orange-200 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute top-[45%] left-[25%] w-6 h-6 bg-orange-300 rounded-full animate-pulse-slow hidden lg:block" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-[38%] left-[20%] w-4 h-4 bg-orange-400 rounded-full animate-pulse-faster hidden lg:block" style={{animationDelay: '0.5s'}}></div>


      <div className="container mx-auto px-4 text-center relative z-10">
        <span className="inline-block bg-green-200 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
          Testimonial
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-8">
          What Our Customers Say
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Customer Image */}
          <div className="relative w-40 h-40 flex-shrink-0">
            <div className="w-full h-full rounded-full overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
              <Image
                src={testimonial.image}
                alt={testimonial.author}
                width={160} // Set explicit width and height
                height={160} // Set explicit width and height
                className="object-cover rounded-3xl"
              />
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm text-left flex-grow max-w-xl">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              &quot;{testimonial.text}&quot;
            </p>
            <p className="font-semibold text-gray-800 text-md">
              {testimonial.author} - <span className="text-gray-600 font-normal">{testimonial.title}</span>
            </p>
          </div>
        </div>

        {/* Navigation Dots (for potential future carousel) */}
        <div className="flex justify-center mt-12 space-x-2">
          <Dot className="h-6 w-6 text-green-600 fill-current" />
          <Dot className="h-6 w-6 text-gray-300" />
          <Dot className="h-6 w-6 text-gray-300" />
        </div>
      </div>
    </section>
  );
};