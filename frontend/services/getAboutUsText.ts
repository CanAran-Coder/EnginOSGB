

export async function getAboutUsText(){
    const backend = process.env.API_URL
    if(backend){
        const response = await fetch(`${backend}/aboutUs/getContent`,{method:"GET",next:{revalidate:86400}})
        if(!response.ok){
                throw new Error("Cannot Fetch About Us Text")
        } 
        const data = await response.json();
        return data
        
    }else{
        console.error("Backend Path Empty(Env File)")
    }
    
            
}