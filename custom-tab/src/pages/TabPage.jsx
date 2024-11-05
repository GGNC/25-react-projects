import { useState } from "react";

function TabPage({tabData}){
    const [tabIndex,setTabIndex] = useState(0);

    const tabHeaders = tabData.map((tab,index) => {
        const isShown = index === tabIndex;
        const handleClick = ()=>{
            setTabIndex(index);
        }
        return(
            <button onClick={handleClick} key={tab.id} className={`border p-2 font-bold text-lg ${isShown ? "bg-gray-200":"bg-white"}`}>
                {tab.title}
            </button>
        )
    });

    return (
        <div className="m-2 flex flex-col justify-center items-center">
            <div className="flex flex-row">
                {tabHeaders}
            </div>
            <div className="w-3/4 my-4">
                {tabData[tabIndex].content}
            </div>
        </div>
      )
}

export default TabPage;