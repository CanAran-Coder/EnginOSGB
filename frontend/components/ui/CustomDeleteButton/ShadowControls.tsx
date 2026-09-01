'use client'
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
function ShadowControls({title,deleteFunction,id,setLight}:{title:string,deleteFunction:Function,id:number,setLight:any}) {
    
    async function handleClickYes(){
        const toastId = toast.loading("Siliniyor...")
        const response = await deleteFunction(id)
        toast.dismiss(toastId)
        if(!response.success){
            toast.error(response.message)
            return
        }
        
        toast.success(response.message)
        setLight(false)

    }

    async function handleClickNo(){
        setLight(false)
    }

    return ( <>
    
        <div className="bg-[rgba(0,0,0,0.8)] w-screen h-screen fixed inset-0 flex-1 justify-center items-center flex-col flex"> 
            <p className="text-2xl tracking-tight leading-relaxed font-semibold text-white">Silmek istediğinizden emin misiniz:<label className="border-b ml-2">{title}</label></p>
            <div className="flex justify-center items-center gap-2">
                <button onClick={()=> handleClickYes()} className="bg-green-500 tracking-tight leading-relaxed rounded p-2 hover:brightness-150 duration-200 text-white ease-in-out font-semibold hover:cursor-pointer">Evet</button>
                <button onClick={()=> handleClickNo()} className="bg-red-600 rounded p-2 hover:brightness-150 tracking-tight leading-relaxed duration-200 ease-in-out text-white font-semibold hover:cursor-pointer">Hayır</button>
            </div>
        </div>
    
    </> );
}

export default ShadowControls;