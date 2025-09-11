import { links } from "../../data/navigation";
import NavItem from "../NavItem";
import UserArea from "../UserArea";

const Header = () => {
    return (
        <header className="bg-[#1F2937] w-full p-2 flex items-center justify-between">

            <div className="w-full flex h-12 items-center justify-between">
                <div className="w-[33%] pl-4 ">
                    <div className="flex items-center space-x-4 justify-center">
                        <img src="/logo.png" alt="Devsphere Logo" className="h-15 w-15" />
                        <span className="text-white text-xl font-bold">Devsphere</span>
                    </div>
                </div>

                <div className="w-[33%] flex flex-1 px-8 justify-center">
                    <nav>
                        <ul className="flex space-x-6 text-[#D1D5DB] ">
                            {links.map((link) => (
                                <NavItem key={link.id} to={link.path}>
                                    {link.name}
                                </NavItem>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="w-[33%] flex items-center space-x-4 justify-center pr-4">
                    <UserArea />
                </div>
            </div>
        </header>
    );
}

export default Header;