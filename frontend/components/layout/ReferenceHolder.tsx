import { getReferences } from "@/services/getReferences";
import ReferenceCard from "../ui/ReferenceCard";



async function ReferenceHolder() {

    const data = await getReferences();
    const references:reference[] =data.references
    console.log(references)
    return ( <>
    
        <section className="w-full min-h-50 bg-black">
            {references.map((item) => <ReferenceCard key={item.id} reference={item}  />)}
        </section>
    
    </> );
}

export default ReferenceHolder;