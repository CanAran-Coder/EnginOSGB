

export async function getApplications(){

    
    const backend = process.env.NEXT_PUBLIC_API_URL
    const response = await fetch(`${backend}/joinUs/dashboard/getAll`,{method:"GET"})
    const data = (await response.json()); 
    if(!response.ok){

        return{success:false,message:data.message}
    }
    return{success:true,data:data}

}