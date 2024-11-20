import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage url="https://fakestoreapi.com/products"/>} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  )
}
export default App;