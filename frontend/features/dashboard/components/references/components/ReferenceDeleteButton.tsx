'use client'

import toast from "react-hot-toast";
import { deleteReference } from "../api/deleteReference";

function ReferenceDeleteButton({id}:{id:number}) {
    async function handleClick(){
        const toastId = toast.loading("Referans Siliniyor...")
        const response = await deleteReference(id)
        toast.dismiss(toastId)
        if(!response.success){
            toast.error(response.message)
            return
        }
        toast.success(response.message)
    }
    return ( <>
    
        <button onClick={()=> handleClick()} className="bg-red-600 text-white  tracking-tight leading-relaxed px-4 py-2 rounded-xl hover:cursor-pointer hover:brightness-150 duration-300 ease-in-out">Sil</button>

    </> );
}

export default ReferenceDeleteButton;