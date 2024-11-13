import { useDispatch, useSelector } from "react-redux";
import { addToCard, removeFromCard } from "../store/slices/cartSlice";

type ProductProps = {
  product: object;
};
function Product({ product }: ProductProps) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  const handleAddToCart = () => {
    dispatch(addToCard(product));
  };
  const handleRemoveFromCart = () => {
    dispatch(removeFromCard(product?.id));
  };
  return (
    <div className="my-5 mx-2 p-4 bg-neutral-600 group flex flex-col items-center border-2 rounded-xl gap-2">
      <div>
        <img
          src={product?.thumbnail}
          alt={product?.title}
          className="w-full h-48 bg-black border rounded-xl p-4"
        />
      </div>
      <div>
        <h1 className="w-40 mt-2 text-teal-400 text-lg truncate font-bold">
          {product?.title}
        </h1>
      </div>
      <div className="w-full flex items-center justify-center">
        <button
          onClick={
            cart.some((item) => item.id === product?.id)
              ? handleRemoveFromCart
              : handleAddToCart
          }
          className="px-4 py-2 font-extrabold border-2 rounded-2xl bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500"
        >
          {cart.some((item) => item.id === product?.id)
            ? "Remove from cart"
            : "Add to cart"}
        </button>
      </div>
    </div>
  );
}
export default Product;
