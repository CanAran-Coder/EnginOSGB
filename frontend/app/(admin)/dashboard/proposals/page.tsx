import ProposalTable from "@/features/dashboard/components/proposals/ProposalTable";

function Proposals() {

    const tableElements = ["Firma Adı","Yetkili Kişi","Telefon Numarası","E-Posta","İl","Tehlike Sınıfı","Çalışan Sayısı","Hizmet Başlangıcı","Talep Edilen Hizmetler"]


    return ( <>
    
    
        <main className="flex-1 flex justify-center items-center px-5">



           <ProposalTable header={tableElements}/>



        </main>

    
    </> );
}

export default Proposals;