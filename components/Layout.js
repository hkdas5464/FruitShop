import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-primary hover:text-secondary">
              Das FruitShop
            </Link>
            <div className="flex space-x-6">
              <Link href="/cart" className="flex items-center text-gray-600 hover:text-primary">
                <span className="hidden sm:inline">Shopping Cart</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="pt-20 pb-8"> {/* Add padding for fixed nav */}
        <div className="container mx-auto px-4">
          {children}
        </div>
      </main>
    </div>
  );
}