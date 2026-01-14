'use client';

import Link from 'next/link';
import { Product } from '@/types';
import { useCart } from '@/lib/CartContext';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    product.colors?.[0]
  );
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
      <Link href={`/products/${product.id}`}>
        <div className="h-48 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
          <span className="text-6xl">💅</span>
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-pink-600 transition">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>
        
        <div className="mt-3 flex items-center justify-between">
          <span className="text-2xl font-bold text-pink-600">
            ${product.price.toFixed(2)}
          </span>
          
          {!product.inStock && (
            <span className="text-sm text-red-600 font-semibold">Out of Stock</span>
          )}
        </div>

        {product.colors && product.colors.length > 0 && (
          <div className="mt-3">
            <label className="text-xs text-gray-600 block mb-1">Color:</label>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
            >
              {product.colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
        )}
        
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`mt-4 w-full py-2 rounded-lg font-semibold transition ${
            product.inStock
              ? added
                ? 'bg-green-500 text-white'
                : 'bg-pink-600 text-white hover:bg-pink-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {added ? '✓ Added!' : product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
}
