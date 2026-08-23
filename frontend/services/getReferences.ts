

export async function getReferences(){
    const backend = process.env.NEXT_PUBLIC_API_URL
    const response = await fetch(`${backend}/reference/getReferences`,{

        method:"GET",
        
    })
    const data = await response.json().catch(()=> null)

    if(!response.ok){
        
        if(data?.message){
            throw new Error(data.message)
        }
      
        
    }
    
    return data


}