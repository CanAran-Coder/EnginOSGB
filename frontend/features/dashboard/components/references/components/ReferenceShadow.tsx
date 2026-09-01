'use client'
import { RxCross1 } from "react-icons/rx";
import { AddReference } from "../api/addReference";
import toast from "react-hot-toast";


function ReferenceShadow({setLight}:{setLight:any}) {

    async function onSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const toastId = toast.loading("Referans Ekleniyor...");
        const response = await AddReference(new FormData(e.currentTarget))
        toast.dismiss(toastId)
        if(!response.success){
            toast.error(response.message)
        }
        toast.success(response.message)
    }


    return (<>

        <div className="w-screen h-screen bg-[rgba(0,0,0,0.6)] fixed inset-0 flex justify-center items-center">

            <form onSubmit={onSubmit} className={"rounded-2xl shadow-2xl items-center  shadow-black/20 border border-zinc-400 bg-white grid grid-cols-[1fr_2.5fr] gap-y-2 gap-x-2 p-5 py-10 relative"}>
                <RxCross1 onClick={() => setLight(false)} className="top-2 right-2 cursor-pointer text-2xl col-span-full absolute border rounded hover:bg-zinc-800 hover:text-white" />
                <label className="tracking-tight text-lg text-zinc-800">Marka:</label>
                <input name="brandName" className="border rounded-xl tracking-tight leading-relaxed p-2" />
                <label className="tracking-tight text-lg text-zinc-800">Logo:</label>
                <input name="logo" className="border rounded-xl tracking-tight leading-relaxed p-2 hover:bg-zinc-800 hover:text-white cursor-pointer" type="file"/>
                <button className="tracking-tight leading-relaxed rounded-xl border hover:bg-zinc-800 hover:text-white col-span-full p-2 cursor-pointer">Kaydet</button>
            </form>

        </div>


    </>);
}

export default ReferenceShadow;