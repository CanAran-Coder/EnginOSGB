
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SliceDate } from "@/utils/sliceDate";
import CustomDeleteButton from "@/components/ui/CustomDeleteButton/CustomDeleteButton";
import { deleteApplication } from "../api/deleteApplication";

function DashBoardApplicationList({ datas }: { datas: ApplicationType[] }) {

    const headers = [ "Başvuru Tarihi", "Ad Soyad", "E-Posta", "Telefon", "Şehir", "Uzmanlık", "Sertifika", "Tecrübe", "CV","Kontrol"]

    return (<>


        <div className="shadow-2xl shadow-black/50 rounded-2xl border border-zinc-400 grid grid-cols-[4fr_6fr_5fr_5fr_2fr_5fr_3fr_2fr_2fr_1fr] place-items-center items-center p-5 min-w-150 mx-2 gap-y-4">

            {headers.map((item, index) => <label className="border-b tracking-tight leading-relaxed text-zinc-800 " key={index}>{item}</label>)}
            {datas.map((item, index) => <React.Fragment key={index}>
                <span>{SliceDate(item.createdAt)}</span>
                <span>{item.fullName}</span>
                <span>{item.email}</span>
                <span>{item.phone}</span>
                <span>{item.city}</span>
                <span>{item.expertise}</span>
                <span>{item.certificate}</span>
                <span>{item.experience}</span>
                <span className="w-full h-full flex justify-center items-center"><Link target="_blank"
                    rel="noopener noreferrer" href={item.cvUrl} className="absolute w-10 h-8"><Image className="object-contain" fill src={"/cv.png"} alt="cvImage" /></Link></span>
                <CustomDeleteButton id={item.id} title={item.fullName} key={index} deleteFunction={deleteApplication}/>



            </React.Fragment>)}

        </div>


    </>);
}

export default DashBoardApplicationList;