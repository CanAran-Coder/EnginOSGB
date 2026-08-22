import Image from "next/image";

interface AbouUsTextHolderProps{
    text:string
}

function AboutUsTextHolder({text}:AbouUsTextHolderProps) {

    
    return (<>

        <div className="flex flex-col w-200 h-180  rounded bg-zinc-800 p-8 customShadow">
            <h2 className="text-[#D4B36E] text-3xl font-black border-b">Hakkımızda</h2>
            <p className="text-white tracking-wide text-base leading-relaxed space-y-4 font-normal mt-5 whitespace-pre-line">
                {text}
            </p>
        </div>

    </>);
}

export default AboutUsTextHolder;