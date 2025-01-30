import {Tabs, Tab, Card, CardBody} from "@heroui/react";
import FruitCard from "../FruitCard";
import fruits from "@/utils/image";
import { vegetable } from "@/utils/image";





const cart = [
  { 
    id: "FruitCard", 
    name: 'Fruits', 
    location: fruits, 
    image: '/apple.jpg', 
    description: 'Crisp and refreshing' 
  }, { 
      id: "Vegetablecart", 
      name: 'Vegetable',
      location: vegetable,  
      price: 80, 
      image: '/mango.jpg', 
      description: 'Crisp and refreshing' 
    }
    
];

export default function Example() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
       {cart.map((e)=>(
         <Tab key={e.id} title={e.name}>
         <Card>
           <CardBody>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                       {e.location.map((fruit) => (
                         <FruitCard key={fruit.id} fruit={fruit} />
                       ))}
                     </div>
           </CardBody>
         </Card>
       </Tab>
       ))}
      </Tabs>
    </div>
  );
}
