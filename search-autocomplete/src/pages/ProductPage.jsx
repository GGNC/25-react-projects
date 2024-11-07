import { useState } from "react";
import Product from "../components/Product";
import SearchBar from "../components/SearchBar";

function ProductPage() {
  const [product, setProduct] = useState({});
  const [showProduct, setShowProduct] = useState(false);
  const handleChoose = (data) => {
    setShowProduct(true);
    setProduct(data);
  };
  return (
    <div className="flex flex-col flex-nowrap items-center">
      <SearchBar onChoose={handleChoose} />
      {showProduct ? (
        <Product data={product} />
      ) : (
        <div>Please choose a product</div>
      )}
    </div>
  );
}
export default ProductPage;
