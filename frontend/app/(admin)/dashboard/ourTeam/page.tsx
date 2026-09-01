import OurTeamForm from "@/features/dashboard/components/ourTeam/components/OurTeamForm";
import { getTeamMembers } from "@/features/ourTeam/api/getTeamMembers";

async function DashboardOurTeam() {

    const headers = ["İsim","Etiket","Gösterilme Sırası","Fotoğraf","Kontrol"]
    const data:ourTeamCardProps[] = await getTeamMembers();
    return ( <>
    
    
        <main className="flex-1 flex justify-center items-center">


            <OurTeamForm headers={headers} data={data}/>


        </main>
    
    
    </> );
}

export default DashboardOurTeam;