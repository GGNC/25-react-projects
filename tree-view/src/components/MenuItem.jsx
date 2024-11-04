import { useState } from "react";
import MenuList from "./MenuList";
import {FaMinus,FaPlus} from "react-icons/fa";

function MenuItem({data}){

    const [displayChildren,setDisplayChildren] = useState({});

    const handleToggleChildren = (label)=>{
        setDisplayChildren({
            ...displayChildren,
            [label] : !displayChildren[label]
        });
    };

    const renderedItem = data && data.children && data.children.length > 0 && displayChildren[data.label] ?  <MenuList menuList={data.children}/> : null ;

    const expantionButton = data && data.children && data.children.length ? <span onClick={()=>handleToggleChildren(data.label)}>{
        displayChildren[data.label] ? <FaMinus color="#fff" /> : <FaPlus color="#fff" />
    }</span> : null;

    return(
        <li className="list-disc">
            <div className="flex align-center items-center gap-2 cursor-pointer">
                <p className="text-2xl text-white">{data.label}</p>
                {expantionButton}
            </div>
            {renderedItem}
        </li>
    )
}

export default MenuItem;