import { useEffect, useState } from "react";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count*20}`
      );
      const data = await response.json();
      if (data && data.products && data.products.length) {
        setProducts((previousData) => [...previousData, ...data.products]);
        setLoading(false);
      }

      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) {
    return <div>Loading data , please wait...</div>;
  }

  const renderedProducts = products && products.length ? products.map((product) => {
    return (
      <div key={product.id} className="flex flex-col gap-2.5 p-5 border">
        <img src={product.thumbnail} alt={product.title} />
        <p>{product.title}</p>
      </div>
    );
  }) : null ;
  return (
    <div>
      <div className="flex justify-center align-center flex-col gap-5">
        <h1 className="flex justify-center align-center text-6xl font-bold">
          Products
        </h1>
        <div className="grid grid-cols-4 gap-2.5 m-2">
            {renderedProducts}
        </div>
        <div className="flex justify-center align-center">
          <button
            onClick={() => {
              setCount(count + 1);
            }} 
            className={products && products.length >= 100 ? "border m-2 p-2 cursor-not-allowed opacity-50" : "border m-2 p-2 cursor-pointer"}
            disabled = {products && products.length >= 100}>
            Load More Products
          </button>
        </div>
        <p className="flex justify-center align-center text-2xl font-bold">
                {products && products.length >= 100? "You have reached to 100 product" : ""}
        </p>
      </div>
    </div>
  );
}

export default ProductPage;
