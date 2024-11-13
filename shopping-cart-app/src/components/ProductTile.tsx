import { useDispatch } from "react-redux";
import { removeFromCard } from "../store/slices/cartSlice";

type ProductTileProps = {
  product: object;
};
function ProductTile({ product }: ProductTileProps) {
    const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeFromCard(product?.id));
  };
  return (
    <div className="my-2 flex items-center p-5 justify-between bg-neutral-600 rounded-xl">
      <div className="flex p-3">
        <img
          className="h-36 rounded-lg bg-black p-2"
          src={product?.thumbnail}
          alt={product?.title}
        />
        <div className="ml-10 self-start space-y-5">
          <p className="text-xl font-bold">{product?.title}</p>
          <p className="text-xl font-extrabold">{product?.price}$</p>
          <button
            onClick={handleRemoveFromCart}
            className="px-4 py-2 font-extrabold border-2 rounded-2xl bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500">
            Remove from card
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductTile;
