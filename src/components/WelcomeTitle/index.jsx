import './WelcomeTitle.css';

const WelcomeTitle = () => {
    return (
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 leading-none">
            Plataforma educacional
            <span className="block gradient-text">
                para comunidade dev
            </span>
        </h1>
    );
}

export default WelcomeTitle;
