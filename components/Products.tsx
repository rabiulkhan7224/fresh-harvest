'use client'
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useSWR from "swr";

interface Product {
    id: string;
    productName: string;
    description: string;
    price: number;
    stock: number;
    images: string[];
    categoryId: string;
}
interface Category {
    id: string;
    categoryName: string;
}
const fetcher = (url: string) => fetch(url).then(res => res.json());

const Products = () => {
    const router = useRouter();
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const { data: productRes, isLoading: loadingProducts } = useSWR(
        'https://code-commando.com/api/v1/products',
        fetcher
    );
    const { data: categoryRes, isLoading: loadingCategories } = useSWR(
        'https://code-commando.com/api/v1/category',
        fetcher
    );

    const products: Product[] = productRes?.data || [];
    const categories: Category[] = categoryRes?.data || [];

    const filtered = activeCategory
        ? products.filter(p => p.categoryId === activeCategory)
        : products;


   

    return (
        <div id="shop" className="container w-11/12 mx-auto py-10">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
                <button
                    onClick={() => setActiveCategory(null)}
                    className={`px-4 py-2 border rounded-full ${!activeCategory ? 'bg-green-600 text-white' : 'bg-white text-gray-700'
                        }`}
                >
                    All
                </button>
                {loadingCategories ? (
                    <div className="animate-pulse h-8 bg-gray-300 w-24 rounded-full" />
                ) : (
                    categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-4 py-2 border rounded-full capitalize ${activeCategory === cat.id
                                ? 'bg-green-600 text-white'
                                : 'bg-white text-gray-700'
                                }`}
                        >
                            {cat.categoryName}
                        </button>
                    ))
                )}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {loadingProducts
                    ? Array(8)
                        .fill(0)
                        .map((_, i) => (
                            <div
                                key={i}
                                className="h-[300px] bg-gray-200 animate-pulse rounded-xl"
                            />
                        ))
                    : filtered.map(product => (
                        <div
                            key={product.id}
                            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition cursor-pointer"
                        >
                            <div
                                className="relative w-full h-48 bg-gray-50"
                                onClick={() => router.push(`/products/${product.id}`)}
                            >
                                <Image
                                    src={product.images[0] || '/placeholder.jpg'}
                                    alt={product.productName}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    className="object-cover object-center rounded " />
                            </div>
                            <div className="p-4 text-center">
                                <h2 className="text-lg font-semibold mb-1 line-clamp-1">
                                    {product.productName}
                                </h2>
                               
                                <p className=" font-bold mb-2">
                                    $ {product.price} /Kg
                                </p>
                                <Link href={`/products/${product.id}`}
                                    
                                    className="bg-primaryColor hover:bg-Gray100 text-white px-8 py-2 rounded text-sm w-full mx-auto"
                                >
                                    Add to Cart
                                </Link>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Products;
