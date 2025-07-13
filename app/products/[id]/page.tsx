import { Heart, Star } from "lucide-react"; // Import Star icon for ratings
import Image from "next/image";
import { Button } from '@/components/ui/button'; // Assuming you have a reusable Button component
import { Input } from '@/components/ui/input'; // Assuming you have a reusable Input component
// import { useState } from "react"; // For client-side interactivity like quantity

// Define the product type based on your API response
interface Product {
  _id: string;
  productName: string;
  description: string;
  price: number;
  stock: number;
  images: string[]; // Array of image URLs
  // Add any other properties from your product API (e.g., ratings, category)
  rating?: number; // Optional rating field
  numReviews?: number; // Optional number of reviews
}

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`https://code-commando.com/api/v1/products/${id}`);
  if (!res.ok) {
    // Handle error if product not found or API fails
    throw new Error(`Failed to fetch product: ${res.statusText}`);
  }
  const json = await res.json();
  return json.data; // Assuming your API wraps data in a 'data' field
};

// Client-side component for quantity and button interactions
// const ProductInteraction = ({ product }: { product: Product }) => {
//   // const [quantity, setQuantity] = useState<number>(1);
//   // const [activeTab, setActiveTab] = useState<"description" | "reviews">("description");

//   const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = parseInt(e.target.value);
//     if (!isNaN(value) && value >= 1 && value <= product.stock) {
//       setQuantity(value);
//     } else if (value < 1) {
//       setQuantity(1); // Don't allow less than 1
//     } else if (value > product.stock) {
//       setQuantity(product.stock); // Don't allow more than stock
//     }
//   };

  const incrementQuantity = () => {
    setQuantity((prev) => Math.min(prev + 1, product.stock));
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  const handleAddToCart = () => {
    // Implement add to cart logic here
    console.log(`Added ${quantity} of ${product.productName} to cart`);
    // toast.success(`${quantity} ${product.productName} added to cart!`);
  };

  const handleSaveAsFavorite = () => {
    // Implement save as favorite logic here
    console.log(`Saved ${product.productName} as favorite`);
    // toast.info(`${product.productName} saved to favorites!`);
  };

  // Mock related products (replace with actual API call)
  const relatedProducts = [
    { _id: '1', productName: 'Kiwi', price: 6.3, images: ['/images/kiwi.png'] },
    { _id: '2', productName: 'Orange', price: 2.5, images: ['/images/orange.png'] },
    { _id: '3', productName: 'Guava', price: 2.0, images: ['/images/guava.png'] },
    { _id: '4', productName: 'Eggplant', price: 3.5, images: ['/images/eggplant.png'] },
  ];

  // Helper to render stars (assuming a 5-star rating system)
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="md:grid md:grid-cols-2 gap-8 items-start">
      {/* Image Section */}
      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-gray-200">
        <Image
          src={product.images[0]}
          alt={product.productName}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover bg-gray-50"
        />
      </div>

      {/* Product Info Section */}
      <div className="mt-6 md:mt-0">
        <h2 className="text-sm text-gray-500 font-medium">Fruits</h2> {/* Hardcoded category */}
        <h1 className="text-4xl font-bold text-gray-800 mt-2 mb-2">{product.productName}</h1>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {renderStars(product.rating || 0)} {/* Use product.rating if available */}
          </div>
          <span className="text-gray-600 text-sm">
            {product.rating?.toFixed(1) || '0.0'} ({product.numReviews || 0} reviews)
          </span>
        </div>
        <p className="text-3xl font-bold text-green-700 mb-4">${product.price.toFixed(2)}</p>

        <p className="text-gray-700 mb-6 leading-relaxed">
          {product.description}
        </p>

        {/* Quantity Selector */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-semibold text-gray-700">Quantity:</span>
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={decrementQuantity}
              disabled={quantity <= 1}
              className="w-10 h-10 p-0 rounded-none hover:bg-gray-100"
            >
              -
            </Button>
            <Input
              type="number"
              min={1}
              max={product.stock}
              value={quantity}
              onChange={handleQuantityChange}
              className="w-16 text-center border-x border-gray-300 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
              aria-label="Product quantity"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={incrementQuantity}
              disabled={quantity >= product.stock}
              className="w-10 h-10 p-0 rounded-none hover:bg-gray-100"
            >
              +
            </Button>
          </div>
          <span className="text-sm text-gray-500">
            ({product.stock} {product.stock === 1 ? 'item' : 'items'} in stock)
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow-sm flex items-center gap-2 transition-colors"
            onClick={handleSaveAsFavorite}
          >
            <Heart className="w-5 h-5" /> Save as Favorite
          </Button>
          <Button
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg shadow-md transition-colors"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Description and Reviews Tabs */}
      <div className="md:col-span-2 bg-white rounded-lg p-6 shadow-sm border border-gray-200 mt-8">
        <div className="flex border-b border-gray-200 mb-4">
          <button
            className={`px-6 py-3 text-lg font-semibold ${
              activeTab === "description" ? "text-green-600 border-b-2 border-green-600" : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`px-6 py-3 text-lg font-semibold ${
              activeTab === "reviews" ? "text-green-600 border-b-2 border-green-600" : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews ({product.numReviews || 0})
          </button>
        </div>

        <div className="text-gray-700 leading-relaxed">
          {activeTab === "description" && (
            <div>
              <p className="mb-4">
                Our coconuts are sustainably grown, ensuring the best quality and taste. Each coconut is handpicked and undergoes rigorous quality checks before reaching you. Packed with natural vitamins, minerals, and essential nutrients, coconuts provide both hydration and nourishment.
              </p>
              <p className="mb-4">
                Whether you're using the water, flesh, or milk, our coconuts bring versatility to your kitchen while supporting healthy living.
              </p>
              <p>
                Perfect for smoothies, desserts, curries, and more — let the natural sweetness of the coconut elevate your recipes. Enjoy the tropical goodness in its purest form, directly from nature.
              </p>
            </div>
          )}
          {activeTab === "reviews" && (
            <div>
              <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
              {/* You would map over actual review data here */}
            </div>
          )}
        </div>
      </div>

      {/* Related Products Section */}
      <div className="md:col-span-2 mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Products <br/> <span className="text-green-700">Related Products</span></h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <div key={p._id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">
              <div className="relative w-full aspect-square bg-gray-50">
                <Image
                  src={p.images[0]}
                  alt={p.productName}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover p-2"
                />
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{p.productName}</h3>
                  <p className="text-green-700 font-bold mt-1">${p.price.toFixed(2)}/kg</p>
                </div>
                <Button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition-colors">
                  Add to cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const DetailsPage = async({ params }: { params: { id: string }}) => {
  const product = await getProduct(params.id);

  return (
    <div className="max-w-6xl mx-auto p-6"> {/* Increased max-width for better layout */}
      <ProductInteraction product={product} />
    </div>
  );
};

export default DetailsPage;