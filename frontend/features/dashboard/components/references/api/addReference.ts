'use server'

import { revalidatePath } from "next/cache";



export async function AddReference(formData: FormData) {


    const backend = process.env.NEXT_PUBLIC_API_URL
    const logo = formData.get("logo") as File
    let logo_url = ""
    if (logo && logo.size > 0) {
        const cloudinaryData = new FormData();
        cloudinaryData.append("file", logo)
        cloudinaryData.append("upload_preset", "enginosgb_preset")
        cloudinaryData.append("folder", "engin_osgb/references")
        const response = await fetch("https://api.cloudinary.com/v1_1/duxfdxiup/image/upload", {
            method: "POST",
            body: cloudinaryData
        });
        const data = await response.json();
        if(response.ok){
            logo_url = data.secure_url
        }
    }

    const data = {
        brandName: formData.get("brandName"),
        logoUrl:logo_url
    }

    const response = await fetch(`${backend}/reference/saveReference`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data)})
    const responseData = await response.json();
    if(!response.ok){
        return {success:false,message:responseData.message}
    }


    revalidatePath("/dashboard/references")

    return {success:true,message:responseData.message}

}