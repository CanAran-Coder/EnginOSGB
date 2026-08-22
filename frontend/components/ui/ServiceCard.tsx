import Image from "next/image";

interface ServiceCardProps {
    title: string,
    description: string,
    bgImage: string
}

function ServiceCard({ title, description, bgImage }: ServiceCardProps) {
    return (
        <>

            <section className="group relative w-80 h-100 rounded-2xl customShadow">
               
                <Image className="object-cover rounded-2xl object-center z-0" src={bgImage} alt="Card Image" fill />
                 <h1 className="text-xl tracking-wide text-center rounded-2xl relative z-10 font-semibold  text-white bg-zinc-900 backdrop-blur-3xl" >{title}</h1>

                 <div className="absolute bg-black/70  opacity-0 group-hover:opacity-100 p-5 duration-300 inset-0 rounded-2xl flex justify-center items-center">
                    <p className="text-white text-center text-lg leading-relaxed">{description}</p>
                 </div>
            </section>

        </>
    );
}

export default ServiceCard;