


export async function getTeamMembers(){
    const backend = process.env.API_URL
    const response = await fetch(`${backend}/teamMembers/getMembers`,{method:"GET"})
    const data = await response.json();
    if(!response.ok){
        throw new Error(data)
    }
    return data


}