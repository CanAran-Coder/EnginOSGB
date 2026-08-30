'use server'

export async function sendForm(formData: FormData) {
    const backend = process.env.NEXT_PUBLIC_API_URL
    const data: formDataType = {
        brandName: formData.get("brandName") as string,
        ownerName: formData.get("ownerName") as string,
        phoneNumber: formData.get("phoneNumber") as string,
        city: formData.get("city") as string,
        dangerCat: formData.get("dangerCat") as string,
        employeeCount: formData.get("employeeCount") as string,
        whenStart: formData.get("whenStart") as string,


        osgbService: formData.get("osgbService") === "on",
        workplacePhysician: formData.get("workplacePhysician") === "on",
        explosionProtectionDocument: formData.get("explosionProtectionDocument") === "on",
        ohsSpecialist: formData.get("ohsSpecialist") === "on",
        ambientMeasurements: formData.get("ambientMeasurements") === "on",
        mobileHealthVehicle: formData.get("mobileHealthVehicle") === "on",
        workplaceNurse: formData.get("workplaceNurse") === "on",
        basicOhsTraining: formData.get("basicOhsTraining") === "on",
        workingAtHeightTraining: formData.get("workingAtHeightTraining") === "on",
    };
    console.log(data)

    const response = await fetch(`${backend}/offer/addOffer`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
    const result = await response.json();

    if (!response.ok) {
        return { success: false, message: result.message }

    }

    return { success: true, message: result.message }

}