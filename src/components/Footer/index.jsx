import { FooterAccount } from "../../db/FooterAccount";
import { FooterLinks } from "../../db/FooterLinks";

import FooterContainer from "./FooterContainer";
import FooterHeader from "./FooterHeader";
import FooterList from "./FooterList";
import FooterTitle from "./FooterTitle";



const Footer = () => {
    return (
        <footer className="border-t border-slate-700 bg-slate-800 mt-auto">
            <div className="container mx-auto px-4 py-8 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Informações */}
                    <FooterContainer>
                        <FooterHeader title="DevSphere" />
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Plataforma educacional para comunidade de desenvolvedores.
                            Conecte-se, aprenda e cresça em sua carreira tech.
                        </p>
                    </FooterContainer>

                    {/* Links Úteis */}
                    <FooterContainer>
                        <FooterTitle title="Links Úteis" />
                    <FooterList list={FooterLinks} />
                    </FooterContainer>

                    {/* Conta */}
                    <FooterContainer>
                        <FooterTitle title="Conta" />
                      <FooterList list={FooterAccount} />
                    </FooterContainer>
                </div>

                {/* Copyright */}
                <div className="border-t border-slate-700 mt-8 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-slate-400 text-sm">
                            &copy; {new Date().getFullYear()} DevSphere. Todos os direitos reservados.
                        </p>
                        <p className="text-slate-400 text-sm mt-2 md:mt-0">
                            Desenvolvido pela equipe <span className="text-slate-600 font-semibold">Mais-Edu</span>
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center mt-4 space-y-2 md:space-y-0 md:space-x-6">
                        <a href="#" className="text-slate-400 hover:text-blue-400 text-xs transition-colors">Política de Privacidade</a>
                        <a href="#" className="text-slate-400 hover:text-blue-400 text-xs transition-colors">Termos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;