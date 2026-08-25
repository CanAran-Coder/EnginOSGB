import PageHeader from "@/components/ui/PageHeader";
import { getTeamMembers } from "../api/getTeamMembers";
import OurTeamCard from "./OurTeamCard";

async function OurTeamHolder() {

        const data:ourTeamCardProps[] = await getTeamMembers();

    return ( <>
    
        <PageHeader title="Ekibimiz" width={300}/>
        <main className="flex-1 grid grid-cols-3 place-items-center">
            {data.map(item => <OurTeamCard key={item.id} {...item}/>)}
        </main>
    
    
    </> );
}

export default OurTeamHolder;