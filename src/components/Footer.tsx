export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              Your one-stop shop for all nail supplies. We offer premium quality products
              for professional nail technicians and enthusiasts.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-pink-400 transition">Home</a></li>
              <li><a href="/products" className="hover:text-pink-400 transition">Products</a></li>
              <li><a href="/categories" className="hover:text-pink-400 transition">Categories</a></li>
              <li><a href="/cart" className="hover:text-pink-400 transition">Shopping Cart</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-300">
              Email: info@nailonlineshop.com<br />
              Phone: (555) 123-4567<br />
              Address: 123 Nail Street, Beauty City
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2026 Nail Online Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
