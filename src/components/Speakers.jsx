
import Options from "./Options";
import Container from "./Container";
import Footer from "./Footer";
import Speaker3 from "../assets/Speaker.png"
import Speaker4 from "../assets/Speaker4.png"






export default function Headphones() {
    return (
        <>
            <div className="black-container"><h1>SPEAKERS</h1></div>

            <div className="first-container1">
                <div>
                    <img className="earphone1-img" src={Speaker3} alt="Headphones" />
                </div>
                <div className="text-container2">
                    <p className="orange-text">NEW PRODUCT</p>
                    <h1>ZX9<br />
                        SPEAKER</h1>
<p>Upgrade your sound system with the all new ZX9 active speaker. It is a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
                    <button className="first-button"> SEE PRODUCT</button>
                </div>
            </div>



            <div className="first-container1">


                <div className="text-container2">
                    <h1>ZX7<br/>
SPEAKER</h1>
                    <p >Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
                    <button className="first-button"> SEE PRODUCT</button>
                </div>

                <div>
                    <img className="earphone1-img" src={Speaker4} alt="Headphones" />
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