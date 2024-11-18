import ProductList from "./components/ProductList";
import ScrollIndicator from "./components/ScrollIndicator";

function App() {
  return (
    <div className="flex flex-col flex-nowrap items-center">
      <ScrollIndicator />
      <h1 className="text-8xl font-extrabold">Products</h1>
      <ProductList url="https://dummyjson.com/products" />
    </div>
  )
}

export default App;