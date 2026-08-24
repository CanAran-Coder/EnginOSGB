import Image from "next/image";

function OurTeamCard({id,photo_url,full_name,title}:ourTeamCardProps) {
    return ( <>
    
        <div className="w-120 rounded shadow-xl shadow-black/20">
            <div className="relative flex-1 w-full h-150 rounded">
                <Image className="object-cover object-center rounded-t select-none" draggable={false} src={photo_url} fill alt={full_name}/>
            </div>
            <div className="flex flex-col w-full  h-15 rounded-b">
                <h1 className="text-black font-bold text-center select-none tracking-wide leading-relaxed">{full_name}</h1>
                <p className="text-zinc-500 tracking-wide text-center select-none leading-relaxed">{title}</p>
            </div>
        </div>
    
    </> );
}

export default OurTeamCard;