'use server'

export async function deleteMember(id:number){

    const backend = process.env.NEXT_PUBLIC_API_URL
    const response = await fetch(`${backend}/teamMembers/deleteMember`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(id)})
    const data = await response.json();
    if(!response.ok){
        return {success:false,message:data.message}
    }

    return {sucess:true,message:data.message}
}