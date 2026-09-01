'use server'



export async function getProposals(){


    const backend = process.env.NEXT_PUBLIC_API_URL

    const response = await fetch(`${backend}/offer/dashboard/getProposals`,{method:"GET"})
    const data = await response.json()
    if(!response.ok){
        return {success:false,message:data.message}
    }


    return {success:true,data:data};


}