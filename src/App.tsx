import { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import { ProducData } from "./data";

function App() {

   const [isOpen, setIsOpen] = useState(false)
    const open = ()=> {setIsOpen(true)}
    const close = () => {setIsOpen(false)}
  
  return (
    <>
    <main className="constainer w-[90%] mx-auto my-3 ">
      <Header isOpen={isOpen} open={open} close={close}/>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {ProducData.map((product) => (<ProductCard key={product.id} product={product} />))}
      </div>
    </main>
    </>
  );
}

export default App;
