'use client'

import toast from "react-hot-toast";

import { useRouter } from "next/navigation";
import { Authenticate } from "../api/authentication";

function YetkiliLoginForm() {
    const router = useRouter()

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        
        e.preventDefault();

        const formData = new FormData(e.currentTarget)
        let toastId = toast.loading("Giriş Yapılıyor...");
        const data = await Authenticate(formData)
        toast.dismiss(toastId)
        if(data.success == false){
            toast.error(data.message!)
            return
        }
        toast.success("Giriş Başarılı!")
        
        router.push("/dashboard")




    }


    return (<>

        <form onSubmit={onSubmit} className="grid grid-cols-[1fr_2.5fr] border-2 border-white bg-[rgba(0,0,0,0.5)] rounded-2xl px-5 py-5 gap-y-2">
            <h1 className="tracking-tight  text-white font-black text-center col-span-full text-3xl my-2">Yetkili Girişi</h1>
            <label className="text-white tracking-tight leading-relaxed text-xl font-semibold">E-Mail:</label>
            <input className="w-full border border-white rounded-xl text-white px-2 py-1 " placeholder="ornek@mail.com" name="email" />
            <label className="text-white tracking-tight leading-relaxed text-xl font-semibold">Şifre:</label>
            <input className="w-full border border-white rounded-xl text-white px-2 py-1 " name="password" type="password" />
            <button className="text-white border border-white rounded-xl col-span-full hover:scale-[1.02] text-xl hover:brightness-300 duration-300 ease-in-out cursor-pointer">Giriş Yap</button>


        </form>

    </>);
}

export default YetkiliLoginForm;