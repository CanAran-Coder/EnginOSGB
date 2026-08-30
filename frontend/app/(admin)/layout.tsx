import AdminSideBar from "@/features/dashboard/components/AdminSideBar";
function AdminLayout({children}:{children:React.ReactNode}) {
    return ( <>
    <main className="flex">
        <AdminSideBar/>
        {children}
    </main>
        
    
    </> );
}

export default AdminLayout;