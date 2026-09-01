'use client'


import React from "react";
import { SliceDate } from "@/utils/sliceDate";
import CustomDeleteButton from "@/components/ui/CustomDeleteButton/CustomDeleteButton";
import { deleteProposal } from "./api/deleteProposal";


function ProposalTable({ header,data }: { header: string[] ,data:ProposalTableItemType[]}) {
    
    






    return (<>


        <div className="shadow-2xl shadow-black/50 border grid grid-cols-[3fr_3fr_3fr_3fr_5fr_1fr_3fr_3fr_4fr_5fr_1fr] place-items-center rounded-2xl p-3 items-center overflow-y-auto max-h-180 gap-x-2">


            {header.map((item, index) => <label className="tracking-tight border-b-2 leading-relaxed " key={index}>{item}</label>)}


            {data.map((item, index) => <React.Fragment key={index}>

                <span>{SliceDate( item.createdAt)}</span>
                <span>{item.brandName}</span>
                <span>{item.ownerName}</span>
                <span>{item.phoneNumber}</span>
                <span>{item.email}</span>
                <span>{item.city}</span>
                <span>{item.dangerCat}</span>
                <span>{item.employeeCount}</span>
                <span>{item.whenStart}</span>
                <span className=" mt-2 grid grid-cols-1 items-center place-items-center">{item.selections.map((item,index) => <label key={index}>{item}</label>)}</span>
                <span><CustomDeleteButton id={item.id} key={item.id} title={item.brandName} deleteFunction={deleteProposal}/></span>


            </React.Fragment>)}


        </div>


    </>);
}

export default ProposalTable;