'use client'

import toast from "react-hot-toast";
import { sendForm } from "../api/FormSend";

function OfferForm({ cities, dangerCat, checkBoxes }: { cities: string[], dangerCat: string[], checkBoxes: CheckBoxes[] }) {


    async function onSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const toastId = toast.loading("Form Gönderiliyor...")
        const response = await sendForm(new FormData(e.currentTarget))
        
        toast.dismiss(toastId)
        if(!response.success){
            toast.error(response.message)
            return
        }
        toast.success(response.message)
        


    }


    return (<>


        <form onSubmit={onSubmit} className="shadow-2xl border p-6 border-slate-300 shadow-black/20 rounded-2xl grid grid-cols-[1fr_2.5fr] items-center gap-y-2">

            <label className="tracking-tight text-base text-zinc-800 font-semibold justify-self-start">Firma Adı:</label>
            <input type="text" name="brandName" className="border-2 rounded-xl h-10 px-3 text-sm tracking-tight font-medium outline-none focus:border-zinc-800 transition" required />
            <label className="tracking-tight text-base text-zinc-800 font-semibold justify-self-start">Yetkili Kişi:</label>
            <input type="text" name="ownerName" className="border-2 rounded-xl h-10 px-3 text-sm tracking-tight font-medium outline-none focus:border-zinc-800 transition" required />
            <label className="tracking-tight text-base text-zinc-800 font-semibold justify-self-start">Telefon Numarası:</label>
            <input type="text" name="phoneNumber" className="border-2 rounded-xl h-10 px-3 text-sm tracking-tight font-medium outline-none focus:border-zinc-800 transition" required />
            <label className="tracking-tight text-base text-zinc-800 font-semibold justify-self-start">E-Posta:</label>
            <input type="text" name="email" className="border-2 rounded-xl h-10 px-3 text-sm tracking-tight font-medium outline-none focus:border-zinc-800 transition" required />
            <label className="tracking-tight text-base text-zinc-800 font-semibold justify-self-start">İl Seçiniz:</label>
            <select name="city" className="border-2 rounded-xl h-10 px-3 text-sm tracking-tight font-medium bg-white outline-none focus:border-zinc-800 transition cursor-pointer">
                {cities.map((item, index) => <option key={index} value={index === 0 ? "" : item}>{item}</option>)}

            </select>
            <label className="tracking-tight text-base text-zinc-800 font-semibold justify-self-start">Tehlike Sınıfı:</label>
            <select name={"dangerCat"} className="border-2 rounded-xl h-10 px-3 text-sm tracking-tight font-medium bg-white outline-none focus:border-zinc-800 transition cursor-pointer">
                {dangerCat.map((item, index) => <option key={index} value={item}>{item}</option>)}

            </select>

            <label className="tracking-tight text-base text-zinc-800 font-semibold justify-self-start">Çalışan Sayısı:</label>
            <input type="text" name="employeeCount" className="border-2 rounded-xl h-10 px-3 text-sm tracking-tight font-medium outline-none focus:border-zinc-800 transition" required />
            <label className="tracking-tight text-base text-zinc-800 font-semibold justify-self-start">Hizmet Başlangıcı:</label>
            <select name={"whenStart"} className="border-2 rounded-xl h-10 px-3 text-sm tracking-tight font-medium bg-white outline-none focus:border-zinc-800 transition cursor-pointer">
                <option value={"Hemen"}>Hemen</option>
                <option value={"30 Gün İçinde"}>30 Gün İçinde</option>
                <option value={"60 Gün İçinde"}>60 Gün İçinde</option>
            </select>
            <label className="tracking-tight text-base text-zinc-800 font-semibold justify-self-start">Talep Edilen Hizmetler:</label>
            <div className="grid grid-cols-3 item-center  p-3 rounded-2xl border-2">
                {checkBoxes.map((item, index) => <div key={index} className="flex gap-x-1"><input className="cursor-pointer" type="checkbox" name={item.name} /><p key={index}>{item.label}</p></div>)}
            </div>
            <button className="font-semibold text-lg border border rounded-2xl py-2 hover:cursor-pointer duration-300 hover:scale-[1.02] ease-in-out col-span-full">Teklif Al</button>
        </form>



    </>);
}

export default OfferForm;