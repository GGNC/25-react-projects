import { useEffect, useMemo, useState } from "react";
import { Circles } from "react-loader-spinner";
import Product from "../components/Product";

type HomePageProps = {
  url: string;
};
function HomePage({ url }: HomePageProps) {
  const [products, setProducts] = useState<object[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products?limit=37&skip=120");
      const data = await response.json();
      if (data.products) {
        setProducts(data.products);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [url]);

  const renderedProducts = useMemo(()=>{
    if(products.length === 0) return null;
    const tempProducts = products.map(product =>{
        return(
            <Product key={product?.id} product={product} />
        )
    });

    return tempProducts;
  },[products]);
  return (
    <div>
        {loading ? 
            <div className="min-h-screen w-full flex justify-center items-center">
                <Circles height={"120"} width={"120"} color="#DDDDDD"/>
            </div> 
            : <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-4">
                {renderedProducts ?? <p>There is no product</p>}    
            </div>}
    </div>
  );
}

export default HomePage;
