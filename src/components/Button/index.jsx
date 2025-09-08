const Button = ({ children, className }) => {
    return ( 
        <button className={`rounded-xl text-center ${className}`}>
            {children}
        </button>
     );
}
 
export default Button;