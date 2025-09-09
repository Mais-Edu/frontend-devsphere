const Card = ({ key,icon, title, description, link, textColor, linkDescription }) => {
    return ( 
        <li className="bg-slate-700 p-8 flex flex-col gap-6" key={key}>
            <img src={icon} />
            <h3 className="font-bold">{title}</h3>
            <p className="text-slate-300">{description}</p>
            <a href={link} className={`text-sm ${textColor}`}>{linkDescription} →</a>
        </li>
     );
}
 
export default Card;