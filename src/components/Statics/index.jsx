import CountUp from 'react-countup';

const Statics = ({ target, label, colorClass }) => {
    return (
        <div className="text-center">
            <h3 className={`text-4xl lg:text-5xl font-bold ${colorClass}`}>
                <CountUp
                    end={target}
                    duration={3}
                    separator="."
                />
                +
            </h3>
            <p className="text-xl text-slate-500 mt-2">{label}</p>
        </div>
    );
};

export default Statics;