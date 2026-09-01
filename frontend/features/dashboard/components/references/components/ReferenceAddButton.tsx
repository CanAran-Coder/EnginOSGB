'use client'
import { AiOutlinePlus } from "react-icons/ai";

function ReferenceAddButton() {
    return ( <>
    
    <div className="absolute top-2 right-2 flex justify-center items-center cursor-pointer">
        <AiOutlinePlus color="green"/>
        <button className="col-span-full  underline cursor-pointer">Marka Ekle</button>
    </div>
    
    
    </> );
}

export default ReferenceAddButton;