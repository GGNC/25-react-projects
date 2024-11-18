import { useEffect, useState } from "react";

function ScrollIndicator(){
    const [scrollPercentage,setScrollPercentage] = useState(0);
    const handleScrollPercentage = ()=>{
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled/height)*100);
    }
    useEffect(()=>{
        window.addEventListener("scroll",handleScrollPercentage);

        return ()=>{
            window.removeEventListener("scroll",handleScrollPercentage);
        }
    },[]);

    console.log(scrollPercentage);
    return(
        <div className="fixed top-0 z-10 w-full h-1">
            <div className="w-full h-full bg-blue-600" style={{width : `${scrollPercentage}%`}}></div>
        </div>
    )
}
export default ScrollIndicator;