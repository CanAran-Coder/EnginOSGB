function PageHeader({ title, width }: { title: string; width: number }) {
    return (
        <div className="w-full flex justify-center items-center pt-5 flex-col">
            <h1 className="tracking-tight leading-relaxed font-black text-3xl text-center">
                {title}
            </h1>
            <div 
                className="h-1 bg-[#D4B36E]" 
                style={{ width: `${width}px` }}
            ></div>
        </div>
    );
}

export default PageHeader;