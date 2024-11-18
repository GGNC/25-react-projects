import { useEffect } from "react";
import { useState } from "react";

function ProductList({url}){
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [errorMsg,setErrorMsg] = useState("");
    
    const fetchProducts = async (productURL)=>{
        try{
            setLoading(true);
            const response = await fetch(`${productURL}?limit=100`);
            const data = await response.json();
            setData(data.products);
        }catch(error){
            setErrorMsg(error.message);
        }finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchProducts(url);
    },[url]);
    if(loading){
        return(
            <div className="w-1/2 my-8 mx-auto">
                <p className="text-lg font-medium">Products are loading...</p>
            </div>
        )
    }
    if(errorMsg){
        return(
            <div className="w-1/2 my-8 mx-auto">
                <p className="text-lg font-medium">{errorMsg}</p>
            </div>
        )
    }
    const renderedProducts = data.map(product =>{
        return(
            <p key={product.id} className="text-lg font-medium">{product.title}</p>
        )
    });
    return(
        <div className="w-1/2 my-8 mx-auto flex flex-col flex-nowrap items-left">
            {renderedProducts}
        </div>
    )
}

export default ProductList;