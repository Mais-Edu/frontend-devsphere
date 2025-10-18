import { Link } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm";


const RegisterPage = () => {
    return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url(/assets/loginbg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>

      <div className="absolute inset-0 bg-[#111418] opacity-90 backdrop-blur-sm"></div>

      <div className="relative z-10 w-full px-4 text-center">
        <RegisterForm />
        <Link to="/" className="text-white mt-6 inline-block hover:underline">
          &larr; Voltar para a página inicial
        </Link>
      </div>
    </div>
  )
}

export default RegisterPage;