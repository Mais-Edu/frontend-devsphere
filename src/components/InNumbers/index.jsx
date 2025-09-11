import { stats } from '../../db/statsData'; // Ajuste o caminho se necessário
import Statics from '../Statics';

const InNumbers = () => {
    return (
        <section className="py-22 bg-slate-800">
            <div className="container mx-auto px-4 ">
                <ul className="flex flex-col md:flex-row justify-around items-center gap-12 md:gap-8">
                    {stats.map((stat) => (
                        <li key={stat.id}>
                            <Statics
                                target={stat.target}
                                label={stat.label}
                                colorClass={stat.colorClass}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default InNumbers;