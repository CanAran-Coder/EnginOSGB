'use client'
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import TeamMemberAddForm from "./TeamMemberAddForm";



function AddTeamMemberButton() {
    const [light,setLight] = useState<boolean>(false)


    return (  <>


        {light && <TeamMemberAddForm setLight={setLight}/>}
        <div  onClick={() => setLight(!light)} className="col-span-full flex justify-center items-center gap-1 absolute top-2 right-2 hover:cursor-pointer">
            <AiOutlinePlus color="green"/>
            <p className="tracking-tight leading-relaxed underline">Kişi Ekle</p>
        </div>
        
    
    </>);
}

export default AddTeamMemberButton;