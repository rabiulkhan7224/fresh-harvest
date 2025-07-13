import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react'; 

const BlogSection = () => {
  const blogPosts = [
    {
      id: '1',
      date: 'May 23, 2024',
      title: 'Exploring Seasonal Delights: A Guide to What\'s Fresh Right Now',
      image: '/blog1.png', 
      link: '/',
    },
    {
      id: '2',
      date: 'May 23, 2024',
      title: 'Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads',
      image: '/blog2.png',
      link: '/',
    },
    {
      id: '3',
      date: 'May 23, 2024',
      title: 'The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week',
      image: '/blog3.png',
      link: '/',
    },
  ];

  return (
    <section id='blog' className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Header Section */}
        <span className="inline-block bg-green-200 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
          Our Blog
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
          Fresh Harvest Blog
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration.
        </p>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="group flex flex-col items-center text-center">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-green-700 transition-colors">
                  {post.title}
                </h3>
                <Link
                  href={post.link}
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;