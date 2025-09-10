import Button from "../Button";
import WelcomeTitle from "../WelcomeTitle";
import WelcomeSubtitle from "../WelcomeSubtitle";

const WelcomeSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <WelcomeTitle />
          <WelcomeSubtitle />
          <Button href="#">
            Começar jornada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
