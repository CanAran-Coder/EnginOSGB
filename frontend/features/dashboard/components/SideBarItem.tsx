import Link from "next/link";

function SideBarItem({label,href}:{label:string,href:string}) {
    return (<>


            <Link href={"/dashboard"+href} className="bg-zinc-600 flex justify-center items-center w-full h-15  hover:brightness-125 duration-300 hover:cursor-pointer text-white font-semibold tracking-tight text-lg">{label}</Link>


    </>);
}

export default SideBarItem;