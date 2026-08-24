import Image from "next/image";

interface AboutUsTextHolderProps {
    text: string;
}

function AboutUsTextHolder({ text }: AboutUsTextHolderProps) {
    return (
        <div className="flex flex-col w-full max-w-4xl h-auto rounded-2xl bg-white border border-slate-200 p-8 md:p-10 shadow-2xl  shadow-black/25 my-10 mx-auto">
            {/* Başlık Alanı */}
            <div className=" border-slate-100 pb-4">
                <h2 className="text-zinc-700 border-b text-3xl font-black tracking-tight">
                    Hakkımızda
                </h2>
                
                
            </div>

            {/* Metin Alanı */}
            <p className="text-slate-700 tracking-wide text-base leading-relaxed font-normal mt-6 whitespace-pre-line">
                {text}
            </p>
        </div>
    );
}

export default AboutUsTextHolder;