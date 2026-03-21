import earphone from "../assets/Earphone1.png"
import earphone2 from "../assets/Earphone2.png"
import earphone3 from "../assets/Earphone3.png"
import Options from "./Options";
import Container from "./Container";
import Footer from "./Footer";





export default function Headphones() {
    return (
        <>
            <div className="black-container"><h1>HEADPHONES</h1></div>

            <div className="first-container1">
                <div>
                    <img className="earphone1-img" src={earphone} alt="Headphones" />
                </div>
                <div className="text-container2">
                    <p className="orange-text">NEW PRODUCT</p>
                    <h1>XX99 Mark II<br />
                        Headphones</h1>
                    <p className="pharagrap">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                    <button className="first-button"> SEE PRODUCT</button>
                </div>
            </div>



            <div className="first-container1">


                <div className="text-container2">
                    <h1>XX99 Mark I <br />
                        Headphones</h1>
                    <p className="pharagrap">As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
                    <button className="first-button"> SEE PRODUCT</button>
                </div>

                <div>
                    <img className="earphone1-img" src={earphone2} alt="Headphones" />
                </div>
            </div>

            <div className="first-container1">
                <div>
                    <img className="earphone1-img" src={earphone3} alt="Headphones" />
                </div>
                <div className="text-container2">
                    <h1>XX59<br />
                        Headphones
                        Headphones</h1>
                    <p className="pharagrap" >Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
                    <button className="first-button"> SEE PRODUCT</button>
                </div>
            </div>
 <br/>
 <br/>
            <Options/>

            <Container/>
            <Footer/>
        </>
    )
}