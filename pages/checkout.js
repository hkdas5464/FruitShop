import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

export default function Checkout() {
  const { cart, total, clearCart } = useCart();
  const router = useRouter();
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsProcessing(true);

    // Simple validation
    if (!Object.values(formData).every(Boolean)) {
      setError('All fields are required');
      setIsProcessing(false);
      return;
    }

    // Simulate payment processing
    try {
      // Replace this with real payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Clear cart and redirect
      clearCart();
      router.push('/confirmation');
    } catch (err) {
      setError('Payment processing failed. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Form */}
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
            
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Address</label>
              <textarea
                required
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Card Number</label>
              <input
                type="text"
                pattern="[0-9]{16}"
                required
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="4242 4242 4242 4242"
                value={formData.cardNumber}
                onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value.replace(/\s/g, '') })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Expiry Date</label>
                <input
                  type="text"
                  pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
                  placeholder="MM/YY"
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                  value={formData.expiry}
                  onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">CVC</label>
                <input
                  type="text"
                  pattern="[0-9]{3}"
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="123"
                  value={formData.cvc}
                  onChange={(e) => setFormData({ ...formData, cvc: e.target.value })}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing || cart.length === 0}
              className={`w-full ${
                isProcessing ? 'bg-gray-600' : 'bg-green-600 hover:bg-green-700'
              } text-white py-3 rounded-lg transition-colors`}
            >
              {isProcessing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
            </button>
          </form>

          {/* Order Summary remains same */}
        </div>
      </div>
    </Layout>
  );
}