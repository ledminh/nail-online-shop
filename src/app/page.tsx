import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/lib/data';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Nail Online Shop</h1>
          <p className="text-xl mb-8">
            Your premier destination for professional nail supplies and accessories
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-pink-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-pink-100 transition transform hover:scale-105"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.id}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-center transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-pink-600 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Fast Shipping</h3>
              <p className="text-gray-600">Get your products delivered quickly and safely</p>
            </div>
            <div>
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Quality Products</h3>
              <p className="text-gray-600">Premium nail supplies from trusted brands</p>
            </div>
            <div>
              <div className="text-5xl mb-4">💯</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">100% Satisfaction</h3>
              <p className="text-gray-600">We guarantee your satisfaction with every purchase</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
