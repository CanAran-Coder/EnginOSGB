import bgImage from "@/features/yetkili/assets/authbg.jpg"
import YetkiliLoginForm from "./YetkiliLoginForm";

function Login() {
    return (<>

        

        <div style={{ backgroundImage: `url(${bgImage.src})` }} className="bg-cover bg-center w-screen h-screen flex justify-center items-center">

            <YetkiliLoginForm/>
        </div>


    </>);
}

export default Login;