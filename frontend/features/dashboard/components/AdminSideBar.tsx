import Image from "next/image";
import AdminSideBarBrand from "./AdminSideBarBrand";
import DashBoardUserInfo from "./DashboardUserInfo";
import SideBarItem from "./SideBarItem";


function AdminSideBar() {
const userRole = "ROLE_ADMIN"

    const menuItems = [
        { label: "Saha Raporları", href: "/fieldReports", roles: ["ROLE_ADMIN"] },
        { label: "Rapor Ekle", href: "/addReport", roles: ["ROLE_ADMIN"] },
        { label: "Teklifler", href: "/proposals", roles: ["ROLE_ADMIN"] },
        {label:"Ekibimiz",href:"/ourTeam",roles:["ROLE_ADMIN"]},
        { label: "İş Başvuruları", href: "/jobApplications", roles: ["ROLE_ADMIN"] },
        { label: "Üyeler", href: "/members", roles: ["ROLE_ADMIN"] },
        { label: "Hakkımızda", href: "/aboutUs", roles: ["ROLE_ADMIN"] },
        { label: "Referanslar", href: "/references", roles: ["ROLE_ADMIN"] },
        { label: "Galeri", href: "/gallery", roles: ["ROLE_ADMIN"] },
        { label: "İletişim", href: "/contact", roles: ["ROLE_ADMIN"] },
        {label:"Profilim",href:"/profile",roles:["ROLE_ADMIN"]}
        
    ];

    
    return (<>

        <nav className="h-screen w-70 bg-zinc-800 flex flex-col">
            <AdminSideBarBrand />
            <DashBoardUserInfo />

            <div className="flex-1  flex flex-col justify-between items-center" >
                {menuItems.map((item,index) => (item.roles.includes(userRole)) ? <SideBarItem key={index} label={item.label} href={item.href} /> :"" )}
            </div>
            

        </nav>


    </>);
}

export default AdminSideBar;