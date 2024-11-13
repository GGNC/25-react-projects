import { Link } from "react-router-dom";

function NavigationBar(){
    return(
        <div>
            <nav className="max-w-6xl mx-auto flex items-center justify-between">
                <Link to={`/`}>
                    <div className="ml-5">
                        <h1 className="p-4 tracking-wide text-4xl md:text-5xl lg:text-6xl text-transparent font-bold bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500 bg-clip-text cursor-pointer">
                            Shopping
                        </h1>
                    </div>
                </Link>
                <ul className="m-8 flex items-center space-x-6 font-semibold list-none">
                    <Link to={"/"}>
                        <li className="cursor-pointer">Home</li>
                    </Link>
                    <Link to={"/cart"}>
                        <li className="cursor-pointer">Cart</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
export default NavigationBar;