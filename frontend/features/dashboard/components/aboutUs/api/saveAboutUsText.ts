



export async function saveAboutUsText(text:string){



    const backend = process.env.NEXT_PUBLIC_API_URL
    const response =await fetch(`${backend}/aboutUs/dashboard/save`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:text})})
    if(!response.ok){
        return {success:false,message:"Kaydedilirken Bir Hata Oluştu!"}
    }

    return {success:true,message:"Başarıyla Kaydedildi!"}

}