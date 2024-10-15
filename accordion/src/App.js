import { useState } from "react";
import Accordion from "./components/Accordion";

function App() {
    const [isMultiple,setIsMultiple] = useState(false);
    const handleClick = ()=>{
        setIsMultiple(!isMultiple);
    };

    const accordionElements = [
        {
            id : 1,
            title : "Anakin SkyWalker",
            content : "Discovered as a slave on Tatooine by Qui-Gon Jinn and Obi-Wan Kenobi, Anakin Skywalker had the potential to become one of the most powerful Jedi ever. Some even believed he was the prophesied Chosen One who would bring balance to the Force.",
        },
        {
            id : 2,
            title : "Obi-Wan Kenobi",
            content : "A legendary Jedi Master, Obi-Wan Kenobi was a noble man and gifted in the ways of the Force. He trained Anakin Skywalker, served as a general in the Republic Army during the Clone Wars, and guided Luke Skywalker as a mentor.",
        },
        {
            id : 3,
            title : "Count Dooku",
            content : "Count Dooku was a menacing Sith Lord and central figure in the Clone Wars. Once a Jedi -- trained by Yoda -- he became disillusioned with the Jedi Order.",
        },
    ];
    
    return (
        <div className="my-5 mx-10 flex flex-nowrap flex-col gap-4">
            <button className="p-0 border rounded-full" onClick={handleClick}>{isMultiple ? "Disable Multiple Selection" : "Enable Multiple Selection"}</button>
            <Accordion items={accordionElements} isMultiple={isMultiple}/>
        </div>
    )
}

export default App;