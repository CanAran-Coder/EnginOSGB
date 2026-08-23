

export async function getAboutUsText(){
    const backend = process.env.API_URL
    if(backend){
        const response = await fetch(`${backend}/aboutUs/getContent`,{method:"GET",next:{revalidate:86400}})
        const data = await response.json();
        if(!response.ok){
                if(data.message){
                    throw new Error(data.message)
                }
                
        } 
        return data
        
    }else{
        console.error("Backend Path Empty(Env File)")
    }
    
            
}