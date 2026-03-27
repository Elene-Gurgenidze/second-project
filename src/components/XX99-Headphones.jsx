import earphone from "../assets/Earphone1.png"
import Counter from "./Counter"
import Features from "./Headphone-features";
import Firstimg from "../assets/Img1.png"
import Secondimg from "../assets/Img2.png"
import Thirdimg from "../assets/Img3.png"
import MayLike from "./MayLike"
import Options from "./Options";
import Container from "./Container";
import Footer from "./Footer";


export default function Home() {
    return (
        <>
            <div className="headphone-container">
                <div className="Mask">
                    <img src={earphone} alt="Headphones" />
                </div>
                <div className="text-container3">
                    <p className="orange-text">NEW PRODUCT</p>
                    <h1>XX99 Mark II<br />
                        Headphones</h1>
                    <p className="pharagrap">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                    <p className="price-text">$ 2,999</p>
                    <div className="counter-container">
                        <Counter />
                        <button className="first-button"> ADD TO CARD</button>
                    </div>
                </div>
            </div>
            <Features />
            <div className="image-container">
                <div className="layout">
                    <img className="firstimg" src={Firstimg} alt="Headphones" />
                    <img  className="secondimg" src={Secondimg} alt="Headphones" />
                </div>
                <img className="thirdimg" src={Thirdimg} alt="Headphones" />

            </div>
            <MayLike/>
            <Options/>
            <Container/>
            <Footer/>
        </>

    );
}