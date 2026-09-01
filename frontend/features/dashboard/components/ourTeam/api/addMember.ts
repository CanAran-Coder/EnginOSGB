'use server'

import { revalidatePath } from "next/cache";



export async function AddTeamMember(formData: FormData) {


    const backend = process.env.NEXT_PUBLIC_API_URL
    const photo = formData.get("photo") as File
    let photo_url = ""
    if (photo && photo.size > 0) {
        const cloudinaryData = new FormData();
        cloudinaryData.append("file", photo)
        cloudinaryData.append("upload_preset", "enginosgb_preset")
        cloudinaryData.append("folder", "engin_osgb/ourTeam")
        const response = await fetch("https://api.cloudinary.com/v1_1/duxfdxiup/image/upload", {
            method: "POST",
            body: cloudinaryData
        });
        const data = await response.json();
        if(response.ok){
            photo_url = data.secure_url
        }
    }

    const data = {
        title: formData.get("title"),
        full_name: formData.get("name"),
        displayOrder: formData.get("displayOrder"),
        photo_url:photo_url
    }

    const response = await fetch(`${backend}/teamMembers/addMember`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data)})
    const responseData = await response.json();
    if(!response.ok){
        return {success:false,message:responseData.message}
    }


    revalidatePath("/dashboard/ourTeam")

    return {success:true,message:responseData.message}

}