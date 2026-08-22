import AboutUsTextHolder from "@/components/layout/AboutUsTextHolder";
import { getAboutUsText } from "@/services/getAboutUsText";

async function AboutUs() {

    const text = await getAboutUsText();

    return (<>
        <main className="flex justify-center items-center flex-1">

            <AboutUsTextHolder text={text} />

        </main>


    </>);
}

export default AboutUs;