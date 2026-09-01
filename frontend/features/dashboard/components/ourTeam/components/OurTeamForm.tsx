import Link from "next/link";
import React from "react";
import { deleteMember } from "../api/deleteMember";
import CustomDeleteButton from "@/components/ui/CustomDeleteButton/CustomDeleteButton";
import AddTeamMemberButton from "./addTeamMember";

function OurTeamForm({ headers ,data}: { headers: string[],data:ourTeamCardProps[] }) {
    return (<>

        <div className="shadow-2xl rounded-2xl grid grid-cols-5 border  gap-y-2 py-5 pt-9 shadow-black/20 border-zinc-400 place-items-center items-center overflow-y-auto max-h-160 w-250 relative">
            <AddTeamMemberButton/>
            {headers.map((item, index) => <label className="tracking-tight border-b leading-relaxed" key={index}>{item}</label>)}

            {data.map((item,index) => <React.Fragment key={index}>
                
                
                <label>{item.full_name}</label>
                <label>{item.title}</label>
                <label>{item.displayOrder}</label>
                <label className=""><Link target="_blank" href={item.photo_url} className=" border block rounded hover:text-white hover:bg-zinc-800 p-2 hover:scale-[1.05] ease-in-out duration-150 cursor-pointer">Göster</Link></label>
                <CustomDeleteButton title={item.full_name} id={item.id} deleteFunction={deleteMember}/>
                
                
                </React.Fragment>)}

        </div>

    </>);
}

export default OurTeamForm;