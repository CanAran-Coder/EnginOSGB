import Image from "next/image";
import React from "react";
import ReferenceDeleteButton from "./ReferenceDeleteButton";
import ReferenceUpdateButton from "./ReferenceUpdateButton";
import ReferenceAddButton from "./ReferenceAddButton";
function ReferenceTable({ headers, data }: { headers: string[], data: Reference[] }) {
    return (<>

        <div className="shadow-2xl shadow-black/20 py-5 pt-8 rounded-2xl items-center place-items-center w-250 border grid grid-cols-[1fr_3fr_3fr_3fr] relative gap-y-2 ">
            <ReferenceAddButton/>
            {headers.map((item, index) => <label className="border-b font-semibold tracking-tight leading-relaxed" key={index}>{item}</label>)}
            {data.map((item, index) => <React.Fragment key={index}>
                <span>{item.id}</span>
                <span>{item.name}</span>
                <span className="relative aspect-video h-10"><Image src={item.logo_url} className="object-contain" fill alt={item.name}/></span>
                <div className="flex w-full h-full items-center justify-center gap-x-2">
                    <ReferenceDeleteButton id={item.id}/>
                    <ReferenceUpdateButton item={item}/>
                </div>
            </React.Fragment>)}
        </div>

    </>);
}

export default ReferenceTable;