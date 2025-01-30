import { useState, useContext } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Layout from '../components/Layout';
import { useCart } from '../context/CartContext';
import fruits from '@/utils/image';

import FruitCard from '../components/FruitCard';
import CartContext from '../context/CartContext';
import MyTabs from '@/components/UI/Tabs';
import UnconventionalTabs from '@/components/UI/Tabs';
import Example from '@/components/UI/Tabs';



export default function Home() {
  const { cart } = useCart(); 
  return (
    <Layout>
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Fresh Fruits and Vegetable Market</h1>
        <div className="flex items-center">
          <ShoppingCartIcon className="h-8 w-8 text-green-600" />
          <span className="ml-2 text-xl font-semibold">
            {cart.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        </div>
      </div>


        

<Example/>
      </div>
    </Layout>
  );
}