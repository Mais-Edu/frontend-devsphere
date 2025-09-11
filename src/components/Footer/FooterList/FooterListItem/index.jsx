const FooterListItem = ({ key, href, title }) => {
    return (
        <li key={key}>
            <a href={href} className="text-slate-300 hover:text-blue-400 transition-colors">
                {title}
            </a>
        </li>
    );
}

export default FooterListItem;