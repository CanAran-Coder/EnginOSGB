import OfferForm from "@/features/offer/components/OfferForm";

function Offer() {
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

    const dangerCat = ["Az Tehlikeli", "Tehlikeli", "Çok Tehlikeli"]
    const checkBoxes = [
        { label: "OSGB Hizmeti", name: "osgbService" },
        { label: "İş Yeri Hekimi", name: "workplacePhysician" },
        { label: "Pat. Kor. Dokümanı", name: "explosionProtectionDocument" },
        { label: "İSG Uzmanı", name: "ohsSpecialist" },
        { label: "Ortam Ölçümleri", name: "ambientMeasurements" },
        { label: "Mobil Sağlık Aracı", name: "mobileHealthVehicle" },
        { label: "İşyeri Hemşiresi", name: "workplaceNurse" },
        { label: "Temel İSG Eğitimi", name: "basicOhsTraining" },
        { label: "Yük. Çal. Eğitimi", name: "workingAtHeightTraining" }
    ];
    return (<>


        <main className="flex-1 flex justify-center items-center">
            <OfferForm cities={cities} dangerCat={dangerCat} checkBoxes={checkBoxes} />
        </main>

    </>);
}

export default Offer;