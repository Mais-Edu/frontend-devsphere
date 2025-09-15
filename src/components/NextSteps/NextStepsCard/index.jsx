import Button from "../../Button";

const NextStepsCard = ({ title, contentText, href }) => {

    return (
        <div className="flex flex-col gap-5 bg-[#1F2937] p-5 rounded-xl border border-slate-700">
            <div className="flex gap-5">
                <div className="rounded p-3 bg-[#16A34A] h-12 w-12">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0001 14.4C12.6366 14.4 13.2471 14.1471 13.6972 13.6971C14.1472 13.247 14.4001 12.6365 14.4001 12C14.4001 11.3635 14.1472 10.753 13.6972 10.3029C13.2471 9.85286 12.6366 9.6 12.0001 9.6C11.3636 9.6 10.7531 9.85286 10.303 10.3029C9.85295 10.753 9.6001 11.3635 9.6001 12C9.6001 12.6365 9.85295 13.247 10.303 13.6971C10.7531 14.1471 11.3636 14.4 12.0001 14.4Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.549561 12C2.07836 7.1316 6.62636 3.6 12 3.6C17.3736 3.6 21.9216 7.1316 23.4504 12C21.9216 16.8684 17.3736 20.4 12 20.4C6.62636 20.4 2.07836 16.8684 0.549561 12ZM16.8 12C16.8 13.273 16.2942 14.4939 15.3941 15.3941C14.4939 16.2943 13.273 16.8 12 16.8C10.7269 16.8 9.50602 16.2943 8.60585 15.3941C7.70567 14.4939 7.19996 13.273 7.19996 12C7.19996 10.727 7.70567 9.50606 8.60585 8.60589C9.50602 7.70571 10.7269 7.2 12 7.2C13.273 7.2 14.4939 7.70571 15.3941 8.60589C16.2942 9.50606 16.8 10.727 16.8 12Z" fill="white" />
                    </svg>
                </div>
                <div className="w-full">
                    <h3 className="text-white font-semibold">{title}</h3>
                    <p className="text-[#9CA3AF] text-sm mb-5">{contentText}</p>
                    <Button href={href} className={"bg-[#16A34A] text-[0.87rem] text-white px-3 py-2 rounded-sm"}>Começar agora</Button>
                </div>
            </div>
        </div>
    );
};

export default NextStepsCard;