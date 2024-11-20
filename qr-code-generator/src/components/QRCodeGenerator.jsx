import { useState } from "react";
import QRCode from "react-qr-code";

function QRCodeGenerator(){
    const [qrCode,setQRCode] = useState("");
    const [qrValue,setQRValue] = useState("");

    const handleGenerate = () => {
        setQRCode(qrValue);
    }
    return (
        <div className="flex justify-center items-center flex-col flex-nowrap">
            <h1 className=" text-4xl font-bold m-2">
                QR Code Generator
            </h1>
            <div className="flex flex-nowrap gap-2 m-3">
                <input className="border px-2" onChange={(event)=>{setQRValue(event.target.value)}} type="text" name="qr-code-value" placeholder="Enter your value" />
                <button 
                    className={qrValue && qrValue.trim() !== "" ? "border px-2 cursor-pointer" : "border px-2 cursor-not-allowed opacity-50" } 
                    onClick={handleGenerate} 
                    disabled={qrValue && qrValue.trim() !== "" ? false : true}
                    >
                    Generate
                </button>
            </div>
            <div>
                <QRCode 
                    id="qr-code"
                    value={qrCode}
                    size={400}
                    bgColor="#fff"
                />
            </div>
        </div>
      )
}

export default QRCodeGenerator;