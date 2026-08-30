'use server'

export async function JoinUsOnSubmit(formData: FormData) {
    const data = Object.fromEntries(formData.entries()) as unknown as JoinUsFormData

    const cvFile = data.cv as File
    let cvUrl = ""

    if(cvFile && cvFile.size>0){
        const cloudinaryData = new FormData();
        cloudinaryData.append("file",cvFile)
        cloudinaryData.append("upload_preset","enginosgb_preset")
        cloudinaryData.append("folder","enginosgb/cvs")
        cloudinaryData.append("resource_type", "raw");
        const response = await fetch("https://api.cloudinary.com/v1_1/duxfdxiup/raw/upload",{
            method:"POST",
            body:cloudinaryData
        });

        const result = await response.json();
        cvUrl = result.secure_url;
    }

    const backendData: JoinUsBackend = {
        fullName: data.fullName,
        certificate: data.certificate,
        city: data.city,
        email: data.email,
        experience: data.experience,
        expertise: data.expert,
        phone: data.phone,
        cvUrl: cvUrl

    }


    try{
        
        const backend = process.env.NEXT_PUBLIC_API_URL
        const response = await fetch(`${backend}/joinUs/joinTeam`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(backendData)})
        if(response.ok){
            return{success:true,message:"Başvuru Başarıyla Alındı!"}
        }

    }catch (error){
        throw new Error("Error in JoinUs Submit Event:"+error)
    }
}