import Image from "next/image";

function AdminSideBarBrand() {
    return (<>

        <div className="navbarBanner w-full flex gap-x-2 mt-2 relative border-b pb-2 border-white">
            <div className="absolute top-0 left-0"><div className="relative w-16 h-16 ml-2 mt-2"><Image src={"/letter-e.png"} fill alt="brandIcon" /></div></div>

            <div className="flex flex-col text-white justify-center items-center flex-1 ">
                <h1 className="text-[#C5A059] font-black tracking-tight text-3xl">Engin</h1>
                <h1 className="text-white font-black tracking-tight  text-3xl">OSGB</h1>
            </div>
        </div>

    </>);
}

export default AdminSideBarBrand;