import { getProposals } from "@/features/dashboard/api/getProposals";
import ProposalTable from "@/features/dashboard/components/proposals/ProposalTable";
import { ProposalBackendDataType } from "@/features/dashboard/types/ProposalBackendData.type";

async function Proposals() {

    const tableElements = ["Tarih", "Firma Adı", "Yetkili Kişi", "Telefon", "E-Posta", "İl", "Tehlike Sınıfı", "Çalışan Sayısı", "Hizmet Başlangıcı", "Talep Edilenler", "Kontrol"]

    const response = await getProposals()
    const data = response.data as unknown as ProposalBackendDataType[]
    let changedData: ProposalTableItemType[] = []
    if (response.success) {



        data.forEach(item => {

            let selections = [];

            item.basicOhsTraining && selections.push("Temel İSG Eğitimi");
            item.osgbService && selections.push("OSGB Hizmeti");
            item.workplacePhysician && selections.push("İşyeri Hekimi");
            item.explosionProtectionDocument && selections.push("Pat. Kor. Dokümanı");
            item.ohsSpecialist && selections.push("İSG Uzmanı");
            item.ambientMeasurements && selections.push("Ortam Ölçümleri");
            item.mobileHealthVehicle && selections.push("Mobil Sağlık Aracı");
            item.workplaceNurse && selections.push("İşyeri Hemşiresi");
            item.workingAtHeightTraining && selections.push("Yük. Çal. Eğitimi");


            changedData.push({
                id: item.id,
                createdAt: item.createdAt,
                city: item.city,
                brandName: item.brandName,
                email: item.email,
                dangerCat: item.dangerCat,
                employeeCount: item.employeeCount,
                ownerName: item.ownerName,
                phoneNumber: item.phoneNumber,
                whenStart: item.whenStart,
                selections: selections
            })
        });




    }





    return (<>


        <main className="flex-1 flex justify-center items-center px-5">



            <ProposalTable header={tableElements} data={changedData} />



        </main>


    </>);
}

export default Proposals;