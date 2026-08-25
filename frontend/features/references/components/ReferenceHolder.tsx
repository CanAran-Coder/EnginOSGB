import { getReferences } from "@/services/getReferences";
import ReferenceCard from "./ReferenceCard";

async function ReferenceHolder() {
    const data = await getReferences();
    const references: reference[] = data?.references || [];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-12">
            {/* Başlık ve Dekoratif Header Alanı */}
            <div className="col-span-full mb-12 flex flex-col items-center text-center">
                {/* Rozet (Badge) */}


                {/* Ana Başlık */}
                <h1 className="text-3xl font-black tracking-tight text-zinc-900 md:text-4xl border-b-4 border-[#D4B36E]">
                    Referanslarımız
                </h1>


                {/* Alt Açıklama Metni */}
                <p className="mt-4 max-w-lg text-sm md:text-base text-zinc-600">
                    İş sağlığı ve güvenliği süreçlerinde bize güvenen kurumsal iş ortaklarımız.
                </p>
            </div>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
                {references.map((item) => (
                    <ReferenceCard key={item.id} reference={item} />
                ))}
            </div>
        </section>
    );
}

export default ReferenceHolder;