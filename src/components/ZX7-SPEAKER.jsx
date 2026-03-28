import earphone from "../assets/Earphone1.png"
import Counter from "./Counter"
import Firstimg from "../assets/Img-cont3-first.png"
import Secondimg from "../assets/../assets/Img-cont3-second.png"
import Thirdimg from "../assets/../assets/Img-cont3-third.png"
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
          <h1>ZX7<br />
            SPEAKER</h1>
          <p className="pharagrap">Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
          <p className="price-text">$ 3,500</p>
          <div className="counter-container">
            <Counter />
            <button className="first-button"> ADD TO CARD</button>
          </div>
        </div>
      </div>
      <div className="features-container">
        <div>
          <h1 className="features">FEATURES</h1>
          <p className="feature-p">Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.

The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.</p>
        </div>

        <div>
          <h1 className="features">IN THE BOX</h1>
          <div className="place">
            <div className="amount">
              <p>2x</p>
              <p>2x</p>
              <p>1x</p>
              <p>1x</p>
              <p>1x</p>
            </div>
            <div className="name">
              <p>Speaker Unit</p>
              <p>Speaker Cloth Panel</p>
              <p>User Manual</p>
              <p>3.5mm 10m Audio Cable</p>
              <p>7.5m Optical Cable</p>
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