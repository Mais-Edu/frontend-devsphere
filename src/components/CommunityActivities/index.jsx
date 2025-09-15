import { useState, useEffect } from "react";
import CardCommunity from "./CardCommunity";

const CommunityActivities = () => {

    const [cardCommunity, setCardCommunity] = useState([]);
    
        useEffect(() => {
            setCardCommunity(() => {
                return [
                    { contentText: "Maria postou uma dúvida sobre", technology: "async/await", timeText: "2h atrás", iconColor: "#2563EB", technologyColor: "#60A5FA"},
                    { contentText: "Carlos compartilhou um projeto de", technology: "Machine Learning", timeText: "4h atrás", iconColor: "#9333EA",  technologyColor: "#C084FC"}
                ];
            });
        }, []);

    return (
        <div className="flex flex-col bg-[#1F2937] px-5 py-3 gap-2 rounded-xl border border-slate-700">
            <h3 className="text-white font-semibold">Atividade da Comunidade</h3>
            {cardCommunity.map((card, index) => (
                    <CardCommunity
                        key={index}
                        contentText={card.contentText}
                        technology={card.technology}
                        timeText={card.timeText}
                        iconColor={card.iconColor}
                        technologyColor={card.technologyColor}
                    />
                ))}
            <a href="#" className="text-[#60A5FA] font-regular text-sm text-center">Ver mais atividades {'->'}</a>
        </div>
    );

}

export default CommunityActivities;