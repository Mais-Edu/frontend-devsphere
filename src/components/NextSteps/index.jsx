import { useState, useEffect } from "react";
import ProgressCard from "../../components/NextSteps/ProgressCard";
import MonthChallenge from "./MonthChallenge";
import NextStepsCard from "../NextSteps/NextStepsCard";

const NextSteps = () => {

    const [progressCards, setProgressCards] = useState([]);

    useEffect(() => {
        setProgressCards(() => {
            return [
                { title: "Programação Python", color: "#EAB308", iconSimbol: "Py", percent: "75%" },
                { title: "JavaScript Avançado", color: "#FACC15", iconSimbol: "Js", percent: "45%" },
                { title: "Banco de Dados", color: "#A855F7", iconSimbol: "Bd", percent: "30%" }
            ];
        });
    }, []);

    return (
        <section className="flex flex-col sm:flex-row gap-8 bg-[#111827] mx-auto px-4 py-8 max-w-6xl">
            <div className="sm:w-1/2 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-[1.5rem]">Trilhas de Aprendizado</h2>
                    <a href="#" className="text-[#60A5FA] text-sm font-regular">Ver todas {'->'}</a>
                </div>

                {progressCards.map((card, index) => (
                    <ProgressCard
                        key={index}
                        title={card.title}
                        color={card.color}
                        iconSimbol={card.iconSimbol}
                        percent={card.percent}
                    />
                ))}

            </div>
            <div className="sm:w-1/2 flex flex-col gap-3">
                <div className="flex justify-between">
                    <h2 className="font-bold text-[1.5rem]">Próximos Passos</h2>
                </div>
                <NextStepsCard
                    title={"React Fundamentals"}
                    contentText={"Aprenda a biblioteca mais popular do JavaScript"}
                    href={"#"} />

                {/* <CommunityActivities/> */}

                <MonthChallenge
                    title={"🏆 Desafio do Mês"}
                    contentText={"Crie uma API REST completa com autenticação"}
                    termText={"Termina em 12 dias"}
                    href={"#"} />
            </div>
        </section>);
};

export default NextSteps;