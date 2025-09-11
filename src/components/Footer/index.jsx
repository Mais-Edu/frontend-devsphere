const Footer = () => {
    return ( 
        <footer className="border-t border-slate-700 bg-slate-800 mt-auto">
            <div className="container mx-auto px-4 py-8 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Informações */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">DevSphere</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Plataforma educacional para comunidade de desenvolvedores. 
                            Conecte-se, aprenda e cresça em sua carreira tech.
                        </p>
                    </div>

                    {/* Links Úteis */}
                    <div className="space-y-4">
                        <h4 className="text-md font-medium text-white">Links Úteis</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Início</a></li>
                            <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Cursos</a></li>
                            <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Forum</a></li>
                            <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Trilhas</a></li>
                        </ul>
                    </div>

                    {/* Conta */}
                    <div className="space-y-4">
                        <h4 className="text-md font-medium text-white">Conta</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Login</a></li>
                            <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Registre-se</a></li>
                            <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Perfil</a></li>
                            <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Contato</a></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-slate-700 mt-8 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-slate-400 text-sm">
                            © 2025 DevSphere. Todos os direitos reservados.
                        </p>
                        <p className="text-slate-400 text-sm mt-2 md:mt-0">
                            Desenvolvido pela equipe <span className="text-blue-400 font-medium">Mais-Edu</span>
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