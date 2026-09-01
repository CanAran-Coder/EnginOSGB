import Image from "next/image";
import React from "react";
import ReferenceAddButton from "./ReferenceAddButton";
import CustomDeleteButton from "@/components/ui/CustomDeleteButton/CustomDeleteButton";
import { deleteReference } from "../api/deleteReference";
function ReferenceTable({ headers, data }: { headers: string[], data: Reference[] }) {
    return (<>

        <div className="shadow-2xl shadow-black/20 py-5 pt-8 rounded-2xl items-center place-items-center w-250 border grid grid-cols-[3fr_3fr_3fr] relative gap-y-2 ">
            <ReferenceAddButton/>
            {headers.map((item, index) => <label className="border-b font-semibold tracking-tight leading-relaxed" key={index}>{item}</label>)}
            {data.map((item, index) => <React.Fragment key={index}>
                <span>{item.name}</span>
                <span className="relative aspect-video h-10"><Image src={item.logo_url} className="object-contain" fill alt={item.name}/></span>
                <div className="flex w-full h-full items-center justify-center gap-x-2">
                    <CustomDeleteButton id={item.id} key={index} title={item.name} deleteFunction={deleteReference}/>
                </div>
            </React.Fragment>)}
        </div>

    </>);
}

export default ReferenceTable;