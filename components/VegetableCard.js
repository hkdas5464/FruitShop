import { useState } from 'react';
import { useCart } from '../context/CartContext';
import Image from 'next/image';

export default function VegetableCard({ fruit }) {
  const { addToCart ,removeFromCart} = useCart();
  const [quantity, setQuantity] = useState(1);
  const [item,setItem] =useState(0);

  const handleAddToCart = () => {
    addToCart(fruit, quantity);
    setQuantity(quantity); // Reset quantity after adding
    setItem(quantity)
  };

  const handleRemovefromCart =(id)=>{
    removeFromCart(id)
    setItem(0)
  }


  

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={fruit.image}
          alt={fruit.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{fruit.name}</h3>
        <p className="text-gray-600 text-sm min-h-[3rem]">{fruit.description}</p>
        <div className="mt-4 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-primary">₹{fruit.price.toFixed(2)}</span>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setQuantity(Math.max(0, quantity - 1))}
                className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-12 text-center border rounded"
              />
              <button 
               onClick={() => setQuantity(Math.max(0, quantity + 1))}
                className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>
         

          {item == 0 ? (
                 <button
                 onClick={handleAddToCart}
                 className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary"
               >
                 Add {fruit.name} to Cart
               </button>
            ) : (
              <button
              onClick={()=>handleRemovefromCart(fruit.id)}
              className="w-full bg-red-700 text-white px-4 py-2 rounded-lg "
            >
              Remove {fruit.name} from Cart
            </button>
            )}
          
        </div>
      </div>
    </div>
  );
}