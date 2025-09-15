import Card from "../../Card";

const CardSection = ({ list }) => {
    return (
        <ul className="flex gap-7">
            {list.map(card => (
                <Card
                    key={card.id}
                    card={card}
                    textColor={card.color}
                />
            ))}
        </ul>
    );
}

export default CardSection;