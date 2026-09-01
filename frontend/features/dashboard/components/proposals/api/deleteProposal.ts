
'use server'

import { revalidatePath } from "next/cache";



export async function deleteProposal(id:number){

    const backend = process.env.NEXT_PUBLIC_API_URL
    const response = await fetch(`${backend}/offer/deleteOffer`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(id)})
    const data = await response.json();
    if(!response.ok){

        return {success:false,message:data.message}
    }

    
    revalidatePath("/dashboard/proposals")
    return {success:true,message:data.message}
}