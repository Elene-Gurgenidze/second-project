import Options from "./Options";
import Container from "./Container";
import Footer from "./Footer";
import Earphones from "../assets/Earphones.png"


export default function Headphones() {
    return (
        <>
            <div className="black-container"><h1>EARPHONES</h1></div>

            <div className="first-container1">
                <div>
                    <img className="earphone1-img" src={Earphones} alt="Headphones" />
                </div>
                <div className="text-container2">
                    <p className="orange-text">NEW PRODUCT</p>
                    <h1>YX1 WIRELESS<br/>
EARPHONES</h1>
<p className="pharagrap">Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
                    <button className="first-button"> SEE PRODUCT</button>
                </div>
            </div>

          
            
            <br />
            <br />
            <Options />

            <Container />
            <Footer />
        </>
    )
}