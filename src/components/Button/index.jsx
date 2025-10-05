import { Link } from 'react-router-dom';

const Button = ({ href, to, className, children }) => {
    if (to) {
        return (
            <Link to={to} className={`rounded-xl text-center ${className}`}>
                {children}
            </Link>
        );
    }

    return (
        <a href={href} className={`rounded-xl text-center ${className}`}>
            {children}
        </a>
    );
}

export default Button;
