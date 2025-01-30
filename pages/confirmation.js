import { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

export default function Confirmation() {
  const { cart } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (cart.length === 0) {
      router.push('/');
    }
  }, [cart, router]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-green-600">Order Confirmed!</h1>
          <p className="text-gray-600 mb-4">
            Thank you for your purchase. A confirmation email has been sent to your inbox.
          </p>
          <button
            onClick={() => router.push('/')}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </Layout>
  );
}