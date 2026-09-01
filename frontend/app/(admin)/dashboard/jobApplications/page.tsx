import { getApplications } from "@/features/dashboard/components/jobApplications/api/getApplications";
import DashBoardApplicationList from "@/features/dashboard/components/jobApplications/components/DashBoardApplicationList";

async function DashBoardJobApplications() {

    const data = await getApplications();

    if(!data.success){
        throw new Error(data.message)
    }


    return (  <>
    
        <main className="flex-1 flex justify-center items-center">
            <DashBoardApplicationList datas={data.data} />
        </main>
        

    
    
    </>);
}

export default DashBoardJobApplications;