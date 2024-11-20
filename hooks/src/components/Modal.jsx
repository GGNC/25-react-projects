import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";

function Modal({children,onClose}){
    const ref = useRef();
    useOnClickOutside(ref,()=>{
        onClose();
    });
    useEffect(()=>{
        document.body.classList.add("overflow-hidden");
        
        return ()=>{
            document.body.classList.remove("overflow-hidden");
        }
    },[]);
    return ReactDOM.createPortal(
        <div>
            <div className="fixed inset-0 bg-gray-300 opacity-80 "></div>
            <div ref={ref} className="fixed w-2/3 h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-5 bg-gray-800 rounded-3xl">
                <div className="flex flex-col justify-between items-center h-full">
                    {children}
                </div>
            </div>
        </div>,
        document.body.querySelector(".modal-container")
    );
}

export default Modal;