'use client'
import { RxCross1 } from "react-icons/rx";
import { AddTeamMember } from "../api/addMember";
import toast from "react-hot-toast";
function TeamMemberAddForm({setLight}:{setLight:any}) {


    async function onSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const toastId = toast.loading("Kişi Ekleniyor...")
        const response = await AddTeamMember(new FormData(e.currentTarget))
        toast.dismiss(toastId)
        if(!response.success){
            toast.error(response.message)
            return
        }
        toast.success(response.message)
        
    }

    return (<>


        <div className="bg-[rgba(0,0,0,0.6)] inset-0 fixed flex justify-center items-center w-screen h-screen z-50">
            <form onSubmit={onSubmit} className={"rounded-2xl shadow-2xl items-center  shadow-black/20 border border-zinc-400 bg-white grid grid-cols-[1fr_2.5fr] gap-y-2 gap-x-2 p-5 py-10 relative"}>
                <RxCross1 onClick={()=> setLight(false)} className="top-2 right-2 cursor-pointer text-2xl col-span-full absolute border rounded hover:bg-zinc-800 hover:text-white"/>
                <label className="tracking-tight text-lg text-zinc-800">İsim:</label>
                <input name="name" className="border rounded-xl tracking-tight leading-relaxed p-2"/>
                <label className="tracking-tight text-lg text-zinc-800">Etiket:</label>
                <input name="title" className="border rounded-xl tracking-tight leading-relaxed p-2"/>
                <label className="tracking-tight text-lg text-zinc-800">Gösterilme Sırası:</label>
                <input name="displayOrder" className="border rounded-xl tracking-tight leading-relaxed p-2" type="number"/>
                <label className="tracking-tight text-lg text-zinc-800">Fotoğraf:</label>
                <input name="photo" className="border rounded-xl tracking-tight leading-relaxed p-2 hover:bg-zinc-800 hover:text-white  duration-200 ease-in-out cursor-pointer" type="file"/>
                <button className="tracking-tight leading-relaxed rounded-xl border hover:bg-zinc-800 hover:text-white col-span-full p-2 cursor-pointer">Kaydet</button>
            </form>
        </div>


    </>);
}

export default TeamMemberAddForm;