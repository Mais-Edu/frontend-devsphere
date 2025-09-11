const WelcomeTitle = ({ title, highlightText }) => {
    return (
        <h1 className="text-6xl font-bold">{title} <br /><span className="text-gradient-logo">{highlightText}</span></h1>
    );
}

export default WelcomeTitle;