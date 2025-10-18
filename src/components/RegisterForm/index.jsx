import { useState } from "react";
import { Link } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { GoLock } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import { PiGoogleChromeLogo } from "react-icons/pi";

const RegisterForm = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="bg-gradient-to-br from-[#181b20cc] to-[#1d2025e6]
            backdrop-blur-lg border border-[#2c313a]/50 rounded-lg">
                <div className="flex flex-col p-6 text-center">
                    <h1 className="text-2xl font-semibold bg-gradient-to-r
                     from-[#5593f7] to-[#1d4fd7] text-transparent bg-clip-text">
                        Crie sua conta
                    </h1>
                    <p className="text-sm text-gray-400">
                        Junte-se a nós e comece a aprender
                    </p>
                </div>
                <div className="pt-0 p-6 space-y-6">
                    <form onSubmit={() => { }} className="space-y-4">
                        <CustomInput
                            label="Email"
                            type="email"
                            placeholder="seu@email.com"
                            required={true}
                            icon={<CiMail />}
                        />
                        <CustomInput
                            label="Senha"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            required={true}
                            icon={<GoLock />}
                            rightIcon={showPassword ? <FaEyeSlash /> : <FaEye />}
                            onRightIconClick={togglePasswordVisibility}
                        />
                        <CustomInput
                            label="Confirmar Senha"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="••••••••"
                            required={true}
                            icon={<GoLock />}
                            rightIcon={showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            onRightIconClick={toggleConfirmPasswordVisibility}
                        />
                        <button
                            type="submit"
                            className="text-lg font-medium rounded-xl bg-gradient-to-r
                             from-[#5593f7] to-[#1d47d7] w-full h-[50px]
                             hover:shadow-xl hover:shadow-[#4896ff26] 
                             transition-all duration-300 ease-in-out cursor-pointer"
                        >
                            Cadastrar
                        </button>
                    </form>
                    <div className="w-full flex items-center justify-center">
                        <div className="w-[35%] h-[1px] bg-[#2c313a]"></div>
                        <p className="text-[12px] text-gray-400">OU CONTINUE COM</p>
                        <div className="w-[35%] h-[1px] bg-[#2c313a]"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            className="border border-[#2c313a]/50 rounded-xl
                         bg-[#111418] h-[45px] text-[#F1F2F3] flex items-center
                          justify-center gap-4 hover:bg-[#F3991D] hover:text-[#111418]
                          transition-all duration-300 ease-in-out cursor-pointer
                        ">
                            <FiGithub size={20} />
                            <span className="text-sm font-medium">GitHub</span>
                        </button>
                        <button
                            className="border border-[#2c313a]/50 rounded-xl
                         bg-[#111418] h-[45px] text-[#F1F2F3] flex items-center
                          justify-center gap-4 hover:bg-[#4889F4] hover:text-[#111418]
                          transition-all duration-300 ease-in-out
                        ">
                            <PiGoogleChromeLogo size={20} />
                            <span className="text-sm font-medium">Google</span>
                        </button>
                    </div>
                    <div className="text-center text-sm text-gray-400">
                        Já tem uma conta?{" "}
                        <Link
                            to="/login"
                            className="text-[#5593f7] hover:text-[#5593f7]/80 transition-colors font-medium"
                        >
                            Faça login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm;