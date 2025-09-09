import Button from "../Button";

const CallToRegister = () => {
    return ( 
        <section className="h-72 flex flex-col justify-center items-center">
            <h1 className="font-bold text-3xl mb-4">Pronto para evoluir?</h1>
            <p className="text-lg text-slate-300 mb-8">Junte-se à maior comunidade de desenvolvedores do Brasil</p>
            <Button className="bg-gradient-progress h-16 w-60 flex justify-center items-center font-semibold text-lg">
                Criar conta gratuita
            </Button>
        </section>
     );
}
 
export default CallToRegister;