import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductTile from "../components/ProductTile";

function CartPage() {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalPrice(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  const renderedProducts = useMemo(() => {
    const tempProducts = cart.map((product) => {
      return <ProductTile key={product?.id} product={product} />;
    });
    return tempProducts;
  }, [cart]);
  return (
    <div className="flex justify-center">
      {cart.length ? (
        <>
          <div className="min-h-[80vh] max-w-6xl mx-auto grid md:grid-cols-2">
            <div className="p-3 flex flex-col justify-center items-center">
              {renderedProducts}
            </div>
          </div>
          <div className="w-68">
            <div className="p-5 flex flex-col justify-center items-end">
              <h1 className="font-extrabold text-lg">Your Card Summary</h1>
              <p>
                <span className="font-bold">Total Product</span>
                <span className="m-2">{cart.length}</span>
              </p>
              <p>
              <span className="font-bold">Total Amount</span>
              <span className="m-2">{totalPrice}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <p className="text-xl font-bold my-2">Your cart is empty.</p>
          <Link to={"/"}>
            <button className="px-4 py-2 font-extrabold border-2 rounded-2xl bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500">
              Shop Now!
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartPage;
