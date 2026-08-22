
import Link from "next/link";
import BrandBanner from "../ui/BrandBanner";

function Navbar() {

    const NAV_LINKS = [
        {label:"Hakkımızda",href:"/aboutUs"},
        {label:"Referanslar",href:"/referances"},
        {label:"Ekibimiz",href:"/ourTeam"},
        {label:"Bize Katılın",href:"/joinUs"},
        {label:"Galeri",href:"/gallery"},
        {label:"Tehlike Sınıfları",href:"/dangerCat"},
        {label:"İletişim",href:"/contactUs"},
        
        

    ]

    return ( 
        <>

            <nav className="flex justify-between items-center w-full h-25">

                <BrandBanner/>

                
                <div className="flex-1 flex justify-center items-center gap-5">
                    {NAV_LINKS.map(item => <Link className="font-bold hover:scale-[1.1] duration-200 ease-in-out hover:border-b" key={item.label} href={item.href}>{item.label}</Link>)}
                    <Link className="font-bold hover:scale-[1.1] duration-200 ease-in-out bg-[#EFD89A] p-2 rounded" href={"/offer"}>Teklif Al</Link>
                </div>
            </nav>
        
        </>
     );
}

export default Navbar;