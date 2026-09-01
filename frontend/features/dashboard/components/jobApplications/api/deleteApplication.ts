'use server'

import { revalidatePath } from "next/cache";

export async function deleteApplication(id:number){

    const backend = process.env.NEXT_PUBLIC_API_URL
    const response = await fetch(`${backend}/joinUs/deleteJoinUs`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(id)})
    const data = await response.json();
    if(!response.ok){
        return {success:false,message:data.message}
    }
    revalidatePath("/dashboard/jobApplications")
    return {success:true,message:data.message}
}