'use client';

import Link from 'next/link';
import { useCart } from '@/lib/CartContext';

export default function Header() {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-pink-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold hover:text-pink-200 transition">
            💅 Nail Online Shop
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-pink-200 transition">
              Home
            </Link>
            <Link href="/products" className="hover:text-pink-200 transition">
              Products
            </Link>
            <Link href="/categories" className="hover:text-pink-200 transition">
              Categories
            </Link>
          </nav>

          <Link
            href="/cart"
            className="bg-white text-pink-600 px-4 py-2 rounded-lg font-semibold hover:bg-pink-100 transition relative"
          >
            Cart
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-pink-900 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
