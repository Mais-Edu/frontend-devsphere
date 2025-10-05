const CustomInput = ({ label, type, placeholder, required, icon, rightIcon, onRightIconClick }) => {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                {label}
            </label>
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    {icon}
                </span>
                <input
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    className={`w-full h-[45px] pl-10 ${rightIcon ? 'pr-10' : 'pr-4'} rounded-xl border border-[#2c313a]/50 bg-[#111418] text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5593f7]/50`}
                />
                {rightIcon && (
                    <span 
                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                        onClick={onRightIconClick}
                    >
                        {rightIcon}
                    </span>
                )}
            </div>
        </div>
    );
};

export default CustomInput;
