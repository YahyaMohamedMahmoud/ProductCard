import ProductCard from "./components/ProductCard";
import { ProducData } from "./data";

function App() {
  return (
      <>
      
      <main className="constainer w-[90%] mx-auto my-3  grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {
          ProducData.map((product) => <ProductCard key={product.id} product={product}/>)
        }
      </main>
      </>
);
}

export default App;
