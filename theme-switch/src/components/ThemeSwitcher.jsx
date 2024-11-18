import { MdDarkMode } from "react-icons/md";
import useLocalStorage from "../hooks/use-localstorage";
import { useEffect, useState } from "react";

function ThemeSwitcher(){
    const [theme,setTheme] = useLocalStorage("darkMode",true);
    const [textColor,setTextColor] = useState("");
    const [backgroundColor,setBackgroundColor] = useState("");
    const handleToggleSwitch = ()=>{
        setTheme(!theme);
    }
    useEffect(()=>{
        setTextColor(theme ? "text-neutral-200" : "text-slate-700" );
        setBackgroundColor(theme ? "bg-slate-700" : "bg-neutral-200" )
    },[theme]);
    return(
        <div className={`h-screen w-screen ${backgroundColor}`}>
        <button onClick={handleToggleSwitch} className={`fixed top-4 right-4 p-4 ${theme ? "bg-neutral-200" : "bg-slate-700" } rounded-full shadow-md`}>
                {theme ? <MdDarkMode color="#334155" size={40}/> : <MdDarkMode color="#e5e5e5" size={40}/> }
        </button>
        <div className="h-96 flex flex-nowrap justify-center items-left flex-col">
          <p className={`px-8 text-6xl font-bold ${textColor}`}>
            Hi, I&apos;m <span className="text-cyan-500">Gökhan</span>!
          </p>
          <p className={`px-12 text-2xl ${textColor}`}>
            I am a <span className="font-bold">Frontend Developer</span>.
          </p>
        </div>
        </div>
    )
}

export default ThemeSwitcher;