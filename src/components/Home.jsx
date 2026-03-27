import headphoneImage from "../assets/Main.png";
import Options from "./Options";
import Container from "./Container";
import Speaker1 from "../assets/Speaker.png";
import speaker1 from "../assets/Speaker3.png";
import Earphone from "../assets/Earphone.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <div className="main-content">
        <section className="hero">
          <div className="hero-content">
            <p className="subtitle">New product</p>
            <h1>
              XX99 Mark II
              <br />
              Headphones
            </h1>
            <p className="description">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link to="/XX99Headphone">
              <button className="first-button">SEE PRODUCT</button>
            </Link>

          </div>
          <div>
            <img className="mainimage" src={headphoneImage} alt="Headphones" />
          </div>
        </section>

        <Options />

        <div className="second-container">
          <div>
            <img className="speaker1" src={Speaker1} alt="ZX9 Speaker" />
          </div>
          <div className="text-container">
            <h1>
              ZX9
              <br />
              SPEAKER
            </h1>
            <p>
              Upgrade to premium speakers that are
              <br />
              phenomenally built to deliver truly remarkable
              <br />
              sound.
            </p>
            <Link to="/zx9speaker">
              <button className="btn">SEE PRODUCT</button>
            </Link>  </div>
        </div>

        <div className="image-container">
          <img className="speaker3" src={speaker1} alt="ZX7 Speaker" />
          <div className="overlay">
            <h1 className="text">ZX7 SPEAKER</h1>
            <button className="transparent-btn">SEE PRODUCT</button>
          </div>
        </div>

        <div className="image">
          <div>
            <img className="earphone-img" src={Earphone} alt="YX1 Earphones" />
          </div>
          <div className="product-container">
            <div className="place">
              <h1 className="text">YX1 EARPHONES</h1>
              <button className="transparent-btn">SEE PRODUCT</button>
            </div>
          </div>
        </div>

        <Container />
      </div>

      <Footer />
    </div>
  );
}