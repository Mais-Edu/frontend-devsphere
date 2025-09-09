import WelcomeTitle from "./WelcomeTitle";
import WelcomeSubtitle from "./WelcomeSubtitle";
import Button from "../Button";

const WelcomeSection = () => {
    return (
        <section className="flex justify-center items-center">
            <section className="w-[45rem] py-[5rem] flex flex-col justify-center items-center text-center gap-5">
                <WelcomeTitle textTitleH1={"Plataforma educacional"} textTitleH1Span={"para comunidade dev"} />
                <WelcomeSubtitle textSubtitle={"Conecte-se com desenvolvedores, aprenda com cursos especializados e participe de desafios mensais. Construa sua carreira tech em uma comunidade colaborativa."} />
                <Button href="#" className="bg-white text-[#111827] p-3 font-semibold">Começar jornada</Button>
            </section>
        </section>

    );
};

export default WelcomeSection;
