import ReferenceTable from "@/features/dashboard/components/references/components/ReferenceTable";
import { getReferences } from "@/services/getReferences";

async function DashboardReferences() {

    const headers = ["Marka","Logo","Kontrol"]
    const {references} = await getReferences();

    return ( <>
    
        <main className="flex-1 flex justify-center items-center">
            <ReferenceTable headers={headers} data={references}/>
        </main>

    </> );
}

export default DashboardReferences;