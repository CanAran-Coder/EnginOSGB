'use client'
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ReferenceShadow from "./ReferenceShadow";

function ReferenceAddButton() {
    const [light,setLight] = useState(false);
    return ( <>

        {light && <ReferenceShadow setLight={setLight}/>}
    
    <div className="absolute top-2 right-2 flex justify-center items-center cursor-pointer gap-x-1">
        <AiOutlinePlus color="green"/>
        <button onClick={()=>setLight(true)} className="col-span-full  underline cursor-pointer">Marka Ekle</button>
    </div>
    
    
    </> );
}

export default ReferenceAddButton;