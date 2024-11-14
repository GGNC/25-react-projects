import { createContext, useState } from "react";


export const GlobalContext = createContext();


export default function GlobalState({children}){
    const [blogList, setBlogList] = useState([]);
    const [pending, setPending] = useState(false);
    const [formData, setFormData] = useState({
        title : "",
        description : ""
    });
    return(
        <GlobalContext.Provider value={{formData,setFormData,blogList,setBlogList,pending,setPending}}>
            {children}
        </GlobalContext.Provider>
    )
}
