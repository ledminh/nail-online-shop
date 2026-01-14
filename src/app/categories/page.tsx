import Link from 'next/link';
import { categories } from '@/lib/data';

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Product Categories</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/products?category=${category.id}`}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-pink-600">{category.name}</h2>
              <span className="text-4xl">💅</span>
            </div>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <div className="text-pink-600 font-semibold hover:text-pink-700">
              Browse {category.name} →
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-pink-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Can't Find What You're Looking For?</h2>
        <p className="text-gray-600 mb-6">
          Browse all our products or use the search feature to find exactly what you need.
        </p>
        <Link
          href="/products"
          className="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
}
