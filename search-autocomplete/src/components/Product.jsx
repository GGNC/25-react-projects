function Product({ data }) {
  return (
    <div className="w-5/12 border rounded flex flex-row flex-wrap justify-evenly items-start">
      <div className="w-5/12 min-w-56">
        <img className="w-full" src={data.thumbnail} alt={data.title} />
      </div>
      <div className="w-5/12 m-3 h-full flex flex-col gap-2">
        <div className="flex flex-col items-left gap-1">
          <p className="font-bold text-xl">{data.title}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.description}</p>
        </div>
        <p className="text-right">{data.price}$</p>
      </div>
    </div>
  );
}
export default Product;
