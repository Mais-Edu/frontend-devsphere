import Button from "../Button";

const WelcomeHome = ({textH1, textSpanH1, textP, hrefButton, textButton}) => {
    return (
        <section className="flex justify-center items-center">
            <section className="w-[45rem] py-[5rem] flex flex-col justify-center items-center text-center gap-5">
               <h1 className="text-[var(--color-white)] text-6xl font-bold">{textH1} <span className="bg-clip-text text-transparent [background-image:var(--gradient-logo)]">{textSpanH1}</span></h1>
               <p className="text-[1.2rem] font-regular text-[var(--slate-300)]">{textP}</p>
               <Button href={hrefButton} className="bg-white text-[#111827] p-3 font-semibold">{textButton}</Button>
            </section>
        </section>

    );
};

export default WelcomeHome;
