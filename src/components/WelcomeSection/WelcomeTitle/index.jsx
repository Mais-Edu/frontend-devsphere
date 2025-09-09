const WelcomeTitle = ({ textTitleH1, textTitleH1Span }) => {
    return (
        <>
            <h1 className="text-[var(--color-white)] text-6xl font-bold"> {textTitleH1} <span className="bg-clip-text text-transparent [background-image:var(--gradient-logo)]">{textTitleH1Span}</span></h1>
        </>
    );
}

export default WelcomeTitle;