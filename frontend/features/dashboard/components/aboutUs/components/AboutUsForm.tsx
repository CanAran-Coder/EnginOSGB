'use client'

import { getAboutUsText } from "@/services/getAboutUsText";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { saveAboutUsText } from "../api/saveAboutUsText";

function AboutUsForm() {

    const [text,setText] = useState<string>("")

    useEffect(()=>{
        async function fillText(){
            const data = await getAboutUsText();
            setText(data.content)
        }
        fillText();
    },[])


    async function onSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const toastId = toast.loading("Kaydediliyor...");
        const response = await saveAboutUsText(text)
        toast.dismiss(toastId)
        if(!response.success){
            toast.error(response.message)
            return
        }
        toast.success(response.message)



        


    }

    return ( <>
    
        
            <form onSubmit={onSubmit} className="flex flex-col border shadow-2xl rounded-2xl shadow-black/50 p-5 min-h-150 min-w-250 gap-2">
                <h1 className="text-2xl font-bold tracking-tight leading-relaxed  text-center text-zinc-700  ">Hakkımızda Metni</h1>
                <textarea name="text" value={text} onChange={(e)=> setText(e.target.value)} className="resize-none  border flex-1 tracking-tight leading-relaxed p-3 rounded-xl text-zinc-700"></textarea>
                <button className="border rounded-xl hover:scale-[1.05] duration-300 ease-in-out cursor-pointer py-2 text-zinc-700 border-zinc-700 font-semibold">Kaydet</button>

                
            </form>
    
    </> );
}

export default AboutUsForm;