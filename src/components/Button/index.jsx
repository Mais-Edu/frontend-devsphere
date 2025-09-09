const Button = ({ href, className, children }) => {
    return ( 
        <a href={href} className={`rounded-xl text-center ${className}`}>
            {children}
        </a>
     );
}
 
export default Button;
