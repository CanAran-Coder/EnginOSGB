'use server'

import { revalidatePath } from "next/cache";

export async function deleteReference(id:number){
    const backend = process.env.NEXT_PUBLIC_API_URL
    const response = await fetch(`${backend}/reference`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(id)})
    const data = await response.json();
    if(!response.ok){
        return {success:false,message:data.message}
    }
    revalidatePath("/dashboard/references")
    return {success:true,message:data.message}



}