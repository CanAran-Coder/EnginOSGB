'use server' 




export async function Authenticate(formData: FormData) {
    try {
        const backend = process.env.NEXT_PUBLIC_API_URL
        const data = Object.fromEntries(formData.entries()) as unknown as typeAuth
        const response = await fetch(`${backend}/yetkili/login`, { method: "POST", body: JSON.stringify(data), headers: { "Content-Type": "application/json" } })
        const newData = await response.json();
        if (!response.ok) {

            return {success:false,message:newData.message||"Giriş Başarısız!"};
        }


        return {success:true,data:newData};
    } catch (ex:any) {
        return {success:false,message:"Sunucuya bağlanılamadı!"}
    }



}