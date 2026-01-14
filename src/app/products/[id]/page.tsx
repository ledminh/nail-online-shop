'use client';

import { use } from 'react';
import { products } from '@/lib/data';
import { useCart } from '@/lib/CartContext';
import { useState } from 'react';
import Link from 'next/link';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    product?.colors?.[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
        <Link
          href="/products"
          className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedColor);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/products"
        className="text-pink-600 hover:text-pink-700 font-semibold mb-6 inline-block"
      >
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-8">
        {/* Product Image */}
        <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg h-96 flex items-center justify-center">
          <span className="text-9xl">💅</span>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          
          <div className="mb-6">
            <span className="inline-block bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold">
              {product.category}
            </span>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

          <div className="mb-6">
            <span className="text-4xl font-bold text-pink-600">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <div className="mb-6">
            <span
              className={`font-semibold ${
                product.inStock ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
            </span>
          </div>

          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select Color
              </label>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                {product.colors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Quantity
            </label>
            <input
              type="number"
              min="1"
              max="99"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-24 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`w-full py-3 rounded-lg font-bold text-lg transition ${
              product.inStock
                ? added
                  ? 'bg-green-500 text-white'
                  : 'bg-pink-600 text-white hover:bg-pink-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {added ? '✓ Added to Cart!' : product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>

          <Link
            href="/cart"
            className="block w-full mt-4 py-3 rounded-lg font-bold text-lg text-center bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
          >
            View Cart
          </Link>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products
            .filter((p) => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
            .map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/products/${relatedProduct.id}`}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition"
              >
                <div className="h-32 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-4xl">💅</span>
                </div>
                <h3 className="font-semibold text-gray-800">{relatedProduct.name}</h3>
                <p className="text-pink-600 font-bold mt-2">
                  ${relatedProduct.price.toFixed(2)}
                </p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
