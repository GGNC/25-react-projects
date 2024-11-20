import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({onSearch}){
    const [searchTerm,setSearchTerm] = useState("");
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(searchTerm.trim()){
            onSearch(searchTerm.trim());
        }
    }
    return(
        <div className="w-full">
            <form onSubmit={(event)=>handleSubmit(event)} className="m-4 flex flex-nowrap justify-center gap-4">
                <input  
                    name="search-bar"
                    type="text"
                    placeholder="Search"
                    value={searchTerm || ""}
                    onChange={(event)=> setSearchTerm(event.target.value)}
                    className="w-4/5 py-2 px-4 border rounded-3xl"
                />
                <button type="submit">
                    <FaSearch size={20}/>
                </button>
            </form>
        </div>
    )
}

export default SearchBar;