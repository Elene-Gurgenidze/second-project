import earphone from "../assets/Earphone3.png"
import Counter from "./Counter"
import Secondimg from "../assets/img-cont2-second.png"
import Thirdimg from "../assets/img-cont2-third.png"
import MayLike from "./MayLike"
import Options from "./Options";
import Container from "./Container";
import Footer from "./Footer";
import Firstimg from "../assets/img-cont2-first.png"



export default function Home() {
    return (
        <>
            <div className="headphone-container">
                <div className="Mask">
                    <img src={earphone} alt="Headphones" />
                </div>
                <div className="text-container3">
                    <h1>XX59 <br />
                        Headphones</h1>
                    <p className="pharagrap">Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
                    <p className="price-text">$ 899</p>
                    <div className="counter-container">
                        <Counter />
                        <button className="first-button"> ADD TO CARD</button>
                    </div>
                </div>
            </div>
            <div className="features-container">
                <div>
                    <h1 className="features">FEATURES</h1>
                    <p className="feature-p"> These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.

                        More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.
                    </p>
                </div>

                <div>
                    <h1 className="features">IN THE BOX</h1>
                    <div className="place">
                        <div className="amount">
                            <p>1x</p>
                            <p>2x</p>
                            <p>1x</p>
                            <p>1x</p>
                        </div>
                        <div className="name">
                            <p>Headphone Unit</p>
                            <p>Replacement Earcups</p>
                            <p>User Manual</p>
                            <p>3.5mm 5m Audio Cable</p>
                        </div>

                    </div>




                </div>
            </div>
            <div className="image-container">
                <div className="layout">
                    <img className="firstimg" src={Firstimg} alt="Headphones" />
                    <img className="secondimg" src={Secondimg} alt="Headphones" />
                </div>
                <img className="thirdimg" src={Thirdimg} alt="Headphones" />

            </div>
            <MayLike />
            <Options />
            <Container />
            <Footer />


        </>

    );
}