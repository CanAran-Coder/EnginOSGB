import PageHeader from "@/components/ui/PageHeader";
import JoinUsForm from "./JoinUsForm";

function JoinUsHolder() {
    const cities = [
        "Seçiniz", "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", 
        "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", 
        "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", 
        "Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", 
        "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", 
        "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", 
        "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", 
        "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", 
        "Kilis", "Osmaniye", "Düzce"
    ];
    
    const certificate = ["Seçiniz", "A Sınıfı", "B Sınıfı", "C Sınıfı", "Sertifikam Yok"];
    const expertTypes = ["Seçiniz", "İş Güvenlik Uzmanı", "İş Yeri Hekimi", "Muhasebe", "Pazarlama", "Yardımcı Sağlık Personeli"];
    const experience = ["Seçiniz", "Yeni Mezun / Deneyimsiz", "1 - 2 Yıl", "3 - 5 Yıl", "5 - 10 Yıl", "10 Yıl ve Üzeri"];

    return (
        <>
            <PageHeader title="Bize Katılın" width={400} />
            <div className="flex-1 flex justify-center items-center py-8">
                <div className="shadow-2xl shadow-black/15 rounded-2xl p-8 w-full max-w-xl bg-white border border-zinc-100 flex justify-center items-center">
                   <JoinUsForm cities={cities} experience={experience} expertTypes={expertTypes} certificate={certificate}/>
                </div>
            </div>
        </>
    );
}

export default JoinUsHolder;