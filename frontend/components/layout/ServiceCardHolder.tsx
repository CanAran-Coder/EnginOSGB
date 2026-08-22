import ServiceCard from "../ui/ServiceCard";

function ServiceCardHolder() {


    const data = [
        {title:"İş Güvenliği Uzmanlığı", description:"A, B ve C sınıfı tecrübeli uzmanlarımızla sahadaki tüm riskleri önceden analiz ediyor, yasal mevzuata %100 uyumla iş yerinizi tam koruma altına alıyoruz.",bgImage:"/ISGUzmani.webp"},
        {title:"İş Yeri Hekimi", description:"Çalışanlarınızın sağlık muayenelerini, işe giriş raporlarını ve periyodik takiplerini mevzuata uygun şekilde yürüterek iş gücü kaybının önüne geçiyoruz.",bgImage:"/IsYeriHekimi.webp"},
        {title:"Mobil Sağlık Taramaları", description:"Donanımlı gezici mobil araçlarımızla akciğer grafisi, işitme testi ve kan analizlerini iş akışınızı hiç aksatmadan doğrudan tesisinizde yapıyoruz.",bgImage:"/medkit.webp"},
        {title:"7/24 Denetim", description:"Kesintisiz saha denetimleri ve anlık raporlama sistemimizle, çalışma alanınızdaki güvenlik standartlarının her an en üst seviyede kalmasını sağlıyoruz.",bgImage:"/7-24.webp"}
        
    ]


    return ( <>
    
        <div className="grid grid-cols-4 p-5 place-items-center">
            {data.map((item,index) => <ServiceCard bgImage={item.bgImage} title={item.title} description={item.description} key={index}></ServiceCard>)}
        </div>
    
    </> );
}

export default ServiceCardHolder;