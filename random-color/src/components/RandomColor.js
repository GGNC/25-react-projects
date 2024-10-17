import { useEffect, useState } from "react";

function RandomColor(){
    const [colorType,setColorType] = useState("hex");
    const [color,setColor] = useState("#000000");

    const handleChangeColor = ()=>{
        const selectRandom = (max)=>{
            return Math.floor( Math.random() * max)
        }
        switch(colorType){
            case "hex":
                let hexCode = "#";
                const hex = [1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
                for (let i = 0; i < 6; i++) {
                    hexCode += hex[selectRandom(hex.length)];
                }
                setColor(hexCode);
            break;
            case "rgb":
                let rgbElements = [selectRandom(256),selectRandom(256),selectRandom(256)];
                let rgbCode = `rgb(${rgbElements[0]},${rgbElements[1]},${rgbElements[2]})`;
                setColor(rgbCode);
            break;
        }
    }
    const handleChangeColorType= ()=>{
        switch(colorType){
            case "hex":
                let hex = color.replace(/^#/, '');
                if (hex.length === 3) {
                    hex = hex.split('').map(char => char + char).join('');
                }
                const bigint = parseInt(hex, 16);
                const r = (bigint >> 16) & 255;
                const g = (bigint >> 8) & 255;
                const b = bigint & 255;
                let rgbCode = `rgb(${r},${g},${b})`;
                setColor(rgbCode);
            break;
            case "rgb":
                const rgbValues = color.match(/\d+/g).map(Number);
                const toHex = (num) => {
                    const hex = num.toString(16);
                    return hex.length === 1 ? '0' + hex : hex;
                };
                setColor(`#${toHex(rgbValues[0])}${toHex(rgbValues[1])}${toHex(rgbValues[2])}`);
            break;
        }
        colorType === "hex" ? setColorType("rgb") : setColorType("hex");
    };
    useEffect(()=>{
        handleChangeColor();
    },[]);
    return(
        <div className="flex flex-col flex-nowrap justify-evenly items-center">
            <div className="flex flex-row flex-nowrap justify-evenly items-center">
                <button className="m-5 px-5 py-2 border" onClick={()=>handleChangeColorType()}>
                    <p>{colorType === "hex" ? <p>Change to rgb</p> : <p>Change to hex</p>}</p>
                </button>
                <button className="m-5 px-5 py-2 border" onClick={()=> navigator.clipboard.writeText(color)}>Copy color code</button>
            </div>
            <div className="flex flex-row flex-nowrap justify-evenly items-center">
                <p className="m-2">Click on the box to change the color</p>
            </div>
            <div className="flex flex-col items-center justify-center" style={{
                width : "20rem",
                height: "20rem",
                background : color,
                cursor : "pointer",
            }} onClick={handleChangeColor}>
                <p className="text-slate-200 text-2xl">{colorType}</p>
                <p className="text-slate-200 text-2xl">{color}</p>
            </div>
        </div>
    )
}

export default RandomColor;