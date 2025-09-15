import highlightCards from "../../db/highlightCards.json"
import CardSection from "./CardSection";

const HighlightHome = () => {
    return ( 
        <section className="h-[558px] flex flex-col justify-center items-center gap-16">
            <h1 className="font-bold text-4xl">Destaques</h1>
            <CardSection list={highlightCards} />
        </section>
     );
}
 
export default HighlightHome;