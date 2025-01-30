import { useContext } from 'react';
import Image from 'next/image';

import Layout from '../components/Layout';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/router';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  const router = useRouter();

  const handleCheckout = () => {
    if (cart.length > 0) {
      router.push('/checkout');
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty</p>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
               <div key={item.id} className="bg-white p-6 rounded-lg shadow-md flex items-center">
               <div className="relative w-24 h-24">
                 <Image
                   src={item.image}
                   alt={item.name}
                   fill
                   style={{ objectFit: 'cover' }}
                   className="rounded-lg"
                 />
               </div>
               <div className="ml-6 flex-1">
                 <h3 className="text-xl font-semibold">{item.name}</h3>
                 <p className="text-gray-600">Price: ₹{item.price.toFixed(2)}</p>
                 <div className="mt-2 flex items-center gap-4">
                   <div className="flex items-center gap-2">
                     <button
                       onClick={() => updateQuantity(item.id, item.quantity - 1)}
                       className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
                       disabled={item.quantity <= 1}
                     >
                       -
                     </button>
                     <input
                       type="number"
                       value={item.quantity}
                       onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                       className="w-16 px-2 py-1 border rounded text-center"
                       min="1"
                     />
                     <button
                       onClick={() => updateQuantity(item.id, item.quantity + 1)}
                       className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
                     >
                       +
                     </button>
                   </div>
                   <button
                     onClick={() => removeFromCart(item.id)}
                     className="ml-4 text-red-600 hover:text-red-700"
                   >
                     Remove

                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-right text-2xl font-bold mt-8">
              Total: ₹{total.toFixed(2)}
            </div>
            {/* <div className="text-right">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Proceed to Checkout
              </button>
            </div> */}
          </div>
        )}
      </div>
      <div className="text-right">
        <button
          onClick={handleCheckout}
          className={`bg-green-600 text-white px-6 py-3 rounded-lg ${
            cart.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'
          } transition-colors`}
          disabled={cart.length === 0}
        >
          Proceed to Checkout (${total.toFixed(2)})
        </button>
      </div>
    </Layout>
  );
}