import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({onClose , header , children , footer}){
    useEffect(()=>{
        document.body.classList.add("overflow-hidden");
        
        return ()=>{
            document.body.classList.remove("overflow-hidden");
        }
    },[]);

    return ReactDOM.createPortal(
        <div>
            <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
            <div className="fixed inset-20 p-10 bg-white">
                <div className="flex flex-col justify-between items-center h-full">
                    {header}
                    {children}
                    {footer}
                </div>
            </div>
        </div>,
        document.body.querySelector(".modal-container")
    );
}
export default Modal;