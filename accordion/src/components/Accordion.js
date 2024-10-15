import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items, isMultiple }) {
    const [singleIndex, setSingleIndex] = useState(-1);
    const [multipleIndex, setMultipleIndex] = useState([]);

    const handleSingleSelection = (index) => {
        setSingleIndex((currentExpandedIndex) => {
            if (currentExpandedIndex === index) return -1;
            else return index;
        });

    };

    const handleMultipleSelection = (newIndex) =>{
        let indexes = [...multipleIndex];
        const findIndex = indexes.indexOf(newIndex);
        if(findIndex === -1) indexes.push(newIndex);
        else indexes.splice(findIndex,1);
        setMultipleIndex(indexes);
    };
    
    const renderedItems = items.map((item, index) => {
        let isExpanded;
        if(isMultiple){
            isExpanded = multipleIndex.indexOf(index) !== -1;
        }else{
            isExpanded = index === singleIndex;
        }

        const icon = <div className="text-2xl">
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>

        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={ isMultiple ? ()=>handleMultipleSelection(index) : ()=>handleSingleSelection(index) }>
                    {item.title}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        )
    });

    return (
        <div className="border-x border-t rounded">
            {renderedItems}
        </div>
    )
}

export default Accordion;