'use client'


interface GlobalErrorProps {
    reset: () => void
    error: Error & { digest?: string }
}

function GlobalError({ error, reset }: GlobalErrorProps) {

    return (<>


        <div className=" flex flex-1 flex-col p-5 justify-center items-center">
            <div>
                <h1 className="font-black">Bir Hata Oluştu</h1>
                {error.message && <p>Hata Mesajı:{error.message}</p>}
                {error.digest && (<p>Hata Kodu:{error.digest}</p>)}
                <button className="border-2 p-1 rounded w-full hover:bg-zinc-900 duration-300 hover:text-white cursor-pointer " onClick={() => reset}>Tekrar Dene</button>
            </div>
        </div>


    </>);
}

export default GlobalError;