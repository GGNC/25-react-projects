import { useEffect } from "react";

function useOnClickOutside(ref,handler){
    useEffect(()=>{
        const listenter = (event)=>{
            if(!ref.current || ref.current.contains(event.target)){
                return;
            }
            handler(listenter);
        }

        document.addEventListener("mousedown",listenter);
        document.addEventListener("touchstart",listenter);
        
        return ()=>{
            document.removeEventListener("mousedown",listenter);
            document.removeEventListener("touchstart",listenter);
            
        }
    },[ref,handler]);

}
export default useOnClickOutside;