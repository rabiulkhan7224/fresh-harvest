import { Heart } from "lucide-react";
import Image from "next/image";

const getProduct = async (id: string) => {
  const res = await fetch(`https://code-commando.com/api/v1/products/${id}`);
  const json = await res.json();
  return json.data;
};
const DetailsPage = async({ params }: { params: { id: string }}) => {
  const { id } = await params
    const product = await getProduct(id);
    return (
        <div className="max-w-4xl mt-16 mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image */}
      <div className="relative w-full aspect-[4/3] rounded overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.productName}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover bg-g"
        />
      </div>

      {/* Product Info */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.productName}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-2xl font-semibold text-green-600 mb-4">
          $ {product.price}
        </p>

        {/* Quantity Selector */}
        <div className="flex items-center space-x-3 mb-4">
          <span className="font-medium">Quantity:</span>
          <input
            type="number"
            min={1}
            max={product.stock}
            defaultValue={1}
            className="w-16 border rounded px-2 py-1 text-center"
          />
          <span className="text-sm text-gray-500">({product.stock} in stock)</span>
        </div>

        
        <div className="flex items-center gap-4">
           <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded shadow flex items-center">
            <Heart/> Save as Favorite
          </button>
          <button className="bg-primaryColor hover:bg-Gray100 text-white px-6 py-2 rounded shadow">
            Add to Cart
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;