'use client'

import toast from "react-hot-toast";
import { JoinUsOnSubmit } from "../api/JoinUsOnSubmit";




function JoinUsForm({ cities, certificate, expertTypes, experience }: JoinUsFormProps) {
   
        
      
       
    async function OnSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const loadingToast = toast.loading("Başvurunuz gönderiliyor...")
        const formData = new FormData(e.currentTarget);
        const result = await JoinUsOnSubmit(formData);
        toast.dismiss(loadingToast);

        if (result?.success) {
            toast.success(result.message);
            (e.target as HTMLFormElement).reset();
        } else {
            toast.error(result?.message || "Bir hata oluştu.");
        }

    }







    
    return (<>
        <form onSubmit={OnSubmit} className="w-full grid grid-cols-[1fr_2.5fr] items-center gap-y-3 gap-x-4">

            <label className="tracking-tight text-base text-zinc-800 font-semibold justify-self-start">Ad Soyad:</label>
            <input type="text" name="fullName" placeholder="Ad Soyad" className="border-2 rounded-xl h-10 px-3 text-sm tracking-tight font-medium outline-none focus:border-zinc-800 transition" required />

            <label className="tracking-tight text-base text-zinc-800 font-semibold justify-self-start">E-Posta:</label>
            <input type="email" name="email" placeholder="ornek@mail.com" className="border-2 rounded-xl h-10 px-3 text-sm tracking-tight font-medium outline-none focus:border-zinc-800 transition" required />

            <label className="tracking-tight text-base text-zinc-800 font-semibold justify-self-start">Telefon:</label>
            <input type="tel" name="phone" placeholder="05XX XXX XX XX" className="border-2 rounded-xl h-10 px-3 text-sm tracking-tight font-medium outline-none focus:border-zinc-800 transition" required />

            <label className="tracking-tight text-base text-zinc-800 font-semibold justify-self-start">Şehir:</label>
            <select name="city" className="border-2 rounded-xl h-10 px-3 text-sm tracking-tight font-medium bg-white outline-none focus:border-zinc-800 transition cursor-pointer">
                {cities.map((item, index) => <option key={index} value={index === 0 ? "" : item}>{item}</option>)}
            </select>

            <label className="tracking-tight text-base text-zinc-800 font-semibold justify-self-start">Uzmanlık:</label>
            <select name="expert" className="border-2 rounded-xl h-10 px-3 text-sm tracking-tight font-medium bg-white outline-none focus:border-zinc-800 transition cursor-pointer">
                {expertTypes.map((item, index) => <option key={index} value={index === 0 ? "" : item}>{item}</option>)}
            </select>

            <label className="tracking-tight text-base text-zinc-800 font-semibold justify-self-start">Sertifika:</label>
            <select name="certificate" className="border-2 rounded-xl h-10 px-3 text-sm tracking-tight font-medium bg-white outline-none focus:border-zinc-800 transition cursor-pointer">
                {certificate.map((item, index) => <option key={index} value={index === 0 ? "" : item}>{item}</option>)}
            </select>

            <label className="tracking-tight text-base text-zinc-800 font-semibold justify-self-start">Tecrübe:</label>
            <select name="experience" className="border-2 rounded-xl h-10 px-3 text-sm tracking-tight font-medium bg-white outline-none focus:border-zinc-800 transition cursor-pointer">
                {experience.map((item, index) => <option key={index} value={index === 0 ? "" : item}>{item}</option>)}
            </select>

            <label className="tracking-tight text-base text-zinc-800 font-semibold justify-self-start">CV (PDF/Word):</label>
            <input name="cv"
                type="file"
                accept=".pdf,.doc,.docx"
                className="border-2 rounded-xl h-10 p-1 text-sm tracking-tight font-medium outline-none focus:border-zinc-800 transition file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-zinc-100 file:text-zinc-700 hover:file:bg-zinc-200 cursor-pointer"
                required
            />

            <button type="submit" className="col-span-full mt-2 border-2 h-11 rounded-xl bg-zinc-900 text-white font-semibold text-base hover:scale-[1.01] active:scale-[0.99] duration-200 ease-in-out cursor-pointer shadow-md">
                Başvuruyu Gönder
            </button>

        </form>

    </>);
}

export default JoinUsForm;