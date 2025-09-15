import Button from "../../Button";

const MonthChallenge = ({title, contentText, termText, href}) => {

    return (
        <div className="flex flex-col gap-2 bg-[linear-gradient(90deg,#EA580C,#DC2626)] p-5 rounded-xl">
            <h3 className="font-semibold">{title}</h3>
            <p className="font-regular text-[0.87rem] text-[#FFEDD5]">{contentText}</p>
            <div className="flex justify-between"><span className="font-regular text-[0.75rem] text-[#FED7AA]">{termText}</span> 
            <Button href={href} className={"bg-[#FFFFFF] text-[0.87rem] text-[#EA580C] px-3 py-2"}>Participar</Button></div>
        </div>
    );
};

export default MonthChallenge;