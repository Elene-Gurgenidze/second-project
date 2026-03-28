import earphone from "../assets/Earphones.png"
import Counter from "./Counter"
import Firstimg from "../assets/Img-cont5-first.png"
import Secondimg from "../assets/../assets/Img-cont5-second.png"
import Thirdimg from "../assets/../assets/Img-cont-5-third.png"
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
          <h1>YX1 WIRELESS<br/>
EARPHONES</h1>
          <p className="pharagrap">Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
          <p className="price-text">$599</p>
          <div className="counter-container">
            <Counter />
            <button className="first-button"> ADD TO CARD</button>
          </div>
        </div>
      </div>
      <div className="features-container">
        <div>
          <h1 className="features">FEATURES</h1>
          <p className="feature-p">Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.

The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black. </p>
        </div>

        <div>
          <h1 className="features">IN THE BOX</h1>
          <div className="place">
            <div className="amount">
              <p>2x</p>
              <p>6x</p>
              <p>1x</p>
              <p>1x</p>
              <p>1x</p>
            </div>
            <div className="name">
              <p>Earphone Unit</p>
              <p>Multi-size Earplugs</p>
              <p>User Manual</p>
              <p>USB-C Charging Cable</p>
              <p>Travel Pouch</p>
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