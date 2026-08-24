import Image from "next/image";

function ReferenceCard({reference}:{reference:reference}) {

   
    return ( <>
    
        <div className="border-2 border-white rounded customShadow w-50 h-50 p-5 flex flex-col justify-center items-center hover:scale-[1.03] duration-300 ease-in-out">
            <div className="relative w-full h-30 "><Image className="object-contain" src={reference.logo_url} fill alt={reference.name}/></div>
            <h1 className="text-black  w-full text-center h-[20%]">{reference.name}</h1>
            
        </div>
        

    
    </> );
}

export default ReferenceCard;