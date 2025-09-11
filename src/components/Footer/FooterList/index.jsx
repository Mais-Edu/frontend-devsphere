import FooterListItem from "./FooterListItem";

const FooterList = ({ list }) => {
    return (
        <ul className="space-y-2 text-sm">
            {list.map(item =>(
                <FooterListItem 
                    key={item.id} 
                    href={item.path}
                    title={item.name}
                />
            ))}
        </ul>
    );
}

export default FooterList;