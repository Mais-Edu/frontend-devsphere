import CallToRegister from "../../components/CallToRegister";
import HighlightHome from "../../components/HighlightHome";
import InNumbers from "../../components/InNumbers";
import WelcomeHome from "../../components/WelcomeHome";

const HomePage = () => {
    return ( 
        <>
        <WelcomeHome />
        <HighlightHome />
        <InNumbers />
        <CallToRegister />
        </>
     );
}
 
export default HomePage;