

export async function getAIResponse(NACE:string){
    const backend = process.env.NEXT_PUBLIC_API_URL
    const response = await fetch(`${backend}/dangerCat/askAI`,{method:"POST",body:JSON.stringify({naceCode:NACE}),headers:{"Content-Type":"application/json"}})
    if(!response.ok){
        throw new Error("Cannot Contact With AI!")
    }
    const data = await response.json();
    return data;
}