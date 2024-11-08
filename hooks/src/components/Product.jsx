function Product({productData,onChoose}){
    return(
        <div onClick={onChoose} className="min-h-80 w-52 bg-gray-800 rounded-xl rounded-t-3xl cursor-pointer flex flex-col flex-nowrap items-center">
            <div className="w-full bg-gray-500 rounded-t-3xl">
                <img className="h-32 w-auto m-auto" src={productData.thumbnail} alt={productData.title} />
            </div>
            <p className="w-full px-4 my-2 text-lg font-bold text-left">{productData.title}</p>
            <p className="w-full px-4 my-2 text-sm text-left text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{productData.description}</p>
        </div>
    )
}
export default Product;