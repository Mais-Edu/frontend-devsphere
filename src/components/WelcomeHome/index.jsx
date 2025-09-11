import Button from "../Button";
import WelcomeSubtitle from "./WelcomeSubtitle";
import WelcomeTitle from "./WelcomeTitle";

const WelcomeHome = () => {
    return (
        <section className="flex justify-center items-center">
            <section className=" py-20 flex flex-col justify-center items-center text-center gap-5">
                <WelcomeTitle title="Plataforma educacional" highlightText="para comunidade dev" />
                <WelcomeSubtitle subtitle="Conecte-se com desenvolvedores, aprenda com cursos especializados e <br>participe de desafios mensais Construa sua carreira tech em uma comunidade<br> colaborativa." />
                <Button href="#" className="bg-white text-midnight-900 px-5 py-3 font-semibold">
                    Começar jornada
                </Button>
            </section>
        </section>

    );
};

export default WelcomeHome;
