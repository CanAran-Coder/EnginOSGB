function AddReport() {
    return ( <>
    
        
            <main className="flex-1 flex justify-center items-center">
                
                <form className="bg-white shadow-2xl shadow-black/70 rounded-2xl grid grid-cols-[1fr_2.5fr] items-center gap-y-2 p-5 gap-x-2">
                    <label className="text-zinc-700 tracking-tight leading-relaxed font-semibold text-xl">Başlık:</label>
                    <input className="px-2 py-1 rounded-xl border" name="title"/>
                    <label className="text-zinc-700 tracking-tight leading-relaxed font-semibold text-xl">Görsel Ekle:</label>
                    <input type="file"   className="hover:cursor-pointer hover:bg-zinc-600 duration-300 ease-in-out hover:text-white px-2 py-1 rounded-xl border" name="media"/>
                    <label className="text-zinc-700 tracking-tight leading-relaxed font-semibold text-xl">Açıklama:</label>
                    <textarea className="px-2 py-1 rounded-xl resize-none border min-h-20"  name="description"/>
                    <button className="col-span-full border font-semibold text-xl hover:cursor-pointer hover:bg-zinc-600 duration-300 ease-in-out hover:text-white rounded-xl">Raporu Ekle</button>


                </form>



            </main>

    </> );
}

export default AddReport;