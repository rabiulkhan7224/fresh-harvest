import Image from "next/image";

const AboutPage = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-12">
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 h-80 sm:h-96 lg:h-[500px] rounded-lg overflow-hidden ">
        <Image
          src="/about.png" 
          alt="Fresh Harvests Team"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          
          className="rounded-lg object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-2">
          About us
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
          The Story of <span className="text-green-700">Fresh Harvests</span>
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          At Fresh Harvests, we believe in bringing the freshest, highest-quality produce directly from our farms to your table. Our journey began with a simple vision: to create a community where healthy eating is accessible and sustainable. We partner with local farmers who share our commitment to organic practices and environmental stewardship.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Every fruit and vegetable you find in our store is hand-picked with care, ensuring that you receive nothing but the best. We are passionate about promoting a healthier lifestyle and supporting the hard work of our growers. Thank you for choosing Fresh Harvests – your trusted source for nature's bounty.
        </p>
        <div className="mt-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-2xl">✓</span>
              <p className="text-gray-700 text-lg">Fresh & Organic Produce</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-2xl">✓</span>
              <p className="text-gray-700 text-lg">Support Local Farmers</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-2xl">✓</span>
              <p className="text-gray-700 text-lg">Sustainable Practices</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-2xl">✓</span>
              <p className="text-gray-700 text-lg">Community Focused</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;