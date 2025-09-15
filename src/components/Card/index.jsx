const Card = ({ card, textColor }) => {
    return (
        <li className="bg-slate-800 p-8 flex flex-col gap-6 w-110 rounded-xl">
            <img
                src={card.icon}
                alt={card.title}
                className="w-15"
            />
            <div>
                <h3 className="font-bold">{card.title}</h3>
                <p className="text-slate-400 text-sm">{card.description}</p>
            </div>
            <a
                href={card.path}
                className="text-sm"
                style={{ background: textColor, WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
                {card.pageCall || card['page-call']} →
            </a>
        </li>
    );
}

export default Card;