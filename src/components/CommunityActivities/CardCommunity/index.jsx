
const CardCommunity = ({contentText, technology, timeText, iconColor, technologyColor}) => {

    return (
        <div className="flex gap-3 bg-[#1F2937] items-center">
            <div style={{ backgroundColor: iconColor }} className="flex justify-center items-center rounded-[50%] w-13 h-11 bg-[#2563EB]">
                {contentText[0].toUpperCase()}
            </div>
            <div className="w-full">
                <div className="flex justify-between text-sm mt-1">
                     <p>{contentText} <span style={{ color: technologyColor }}>{technology}</span></p>
                </div>
                <span className="text-[#9CA3AF] text-sm">{timeText}</span>
            </div>
        </div>
    );

}

export default CardCommunity;