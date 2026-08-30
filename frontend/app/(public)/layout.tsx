import Navbar from "@/components/layout/Navbar";

function PublicLayout({children}:{children:React.ReactNode}) {
    return ( <>
    
        <Navbar/>
        {children}
    
    </> );
}

export default PublicLayout;