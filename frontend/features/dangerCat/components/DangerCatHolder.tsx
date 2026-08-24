'use client'


import { useState } from "react";
import { getAIResponse } from "../api/getAIResponse";

function DangerCatHolder() {
    const [nace, setNace] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<DangerCatResponse | null>(null);



    async function handleClick() {
        if (!nace.trim()) return
        setLoading(true)
        setData(null)
        try {

            const response = await getAIResponse(nace)
            setData(response)
            if (response?.error != null) {
                throw new Error(response.error)

            }


        } catch (exception) {
            throw new Error("AI servisine istek atılırken bir hata oluştu:" + exception)
        } finally {
            setLoading(false)
        }
    }
    return (<>
         (
            <section className=" flex-1 flex flex-col justify-center items-center">

                <h1 className="text-zinc-900/80 font-black text-3xl tracking-tight leading-relaxed">Tehlike Sınıfınızı Ölçün</h1>
                <div className="flex gap-2">
                    <input disabled={loading} onChange={e => setNace(e.target.value)} placeholder="NACE Kodunuzu Giriniz." className="disabled:pointer-events-none tracking-tight border-2 rounded-xl p-2 w-120 text-center text-xl" required />
                    <button disabled={loading} onClick={() => handleClick()} className="disabled:pointer-events-none border-2 p-2 rounded hover:scale-[1.05] cursor-pointer text-center w-40 hover:bg-zinc-900 duration-300 ease-in-out hover:text-white">{loading ? "Analiz Ediliyor..." :"Ölç"}</button>


                </div>
                {(data?.sector != null) && (
                    <div className="border-t-2 w-200  mt-2 h-60 flex flex-col">
                        <p className="text-zinc-900  tracking-tight leading-relaxed"><span className="font-semibold">Sektör</span>:{data.sector}</p>
                        <p className="text-zinc-900 tracking-tight leading-relaxed"><span className="font-semibold">Tehlike Sınıfı</span>:{data.dangerCategory}</p>
                        <p className="text-zinc-900 tracking-tight leading-relaxed">
                            <span className="font-semibold">Yasal Zorunluluklar:</span></p>
                            <ol className="list-none [counter-reset:obligations-counter] mt-1 space-y-1">
                                {data.obligations.map((item) => (
                                    <li
                                        key={item}
                                        className="[counter-increment:obligations-counter] before:content-[counter(obligations-counter)'-_'] before:font-medium text-zinc-800"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ol>

                    </div>
                )}


            </section>
        )


    </>);
}

export default DangerCatHolder;