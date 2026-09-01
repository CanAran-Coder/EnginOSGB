'use client'
import { useState } from "react";
import ShadowControls from "./ShadowControls";

function CustomDeleteButton({ id, deleteFunction, title }: { id: number, deleteFunction: Function, title: string }) {
    const [light, setLight] = useState<boolean>(false)

    return (<>
        <button onClick={() => setLight(prev => !prev)} className=" text-white  font-semibold rounded hover:brightness-200 hover:cursor-pointer duration-150 ease-in-out px-5 bg-red-600 tracking-tight leading-relaxed p-2">Sil</button>
        {light && <ShadowControls setLight={setLight} id={id} deleteFunction={deleteFunction} title={title} />}



    </>);
}

export default CustomDeleteButton;