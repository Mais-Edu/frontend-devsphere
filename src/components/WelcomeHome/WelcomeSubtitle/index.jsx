const WelcomeSubtitle = ({ subtitle }) => {
    const lines = subtitle.split('<br>');

    return (
        <p className="text-xl font-regular text-slate-300">
            {lines.map((line, index) => (
                <span key={index}>
                    {line}
                    {index < lines.length - 1 && <br />}
                </span>
            ))}
        </p>
    );
}

export default WelcomeSubtitle;