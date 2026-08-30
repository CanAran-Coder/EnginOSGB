import Image from "next/image";

function BrandBanner() {
    return (<>


        <div className="flex items-center gap-3">

            <div className="relative h-14 w-14 shrink-0 ml-2">

                <Image className="object-contain" src={"/letter-e.png"} alt="brandIcon" fill priority />

            </div>

            <div className="flex flex-col justify-center ">
                <span className="text-3xl text-[#C5A059] font-black tracking-wider leading-none">ENGİN</span>
                <span className=" tracking-[0.18em] text-black font-bold uppercase">Ortak Sağlık Ve Güvenlik Birimi</span>
            </div>



        </div>


    </>);
}

export default BrandBanner;