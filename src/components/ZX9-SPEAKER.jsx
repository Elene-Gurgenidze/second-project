import { useState } from "react"; // დავამატეთ useState
import { useCart } from "./context/CartContext"; // დავამატეთ useCart
import earphone from "../assets/Speaker1.png"
import Counter from "./Counter"
import Firstimg from "../assets/Img-cont3-first.png"
import Secondimg from "../assets/Img-cont3-second.png"
import Thirdimg from "../assets/Img-cont3-third.png"
import MayLike from "./MayLike"
import Options from "./Options";
import Container from "./Container";
import Footer from "./Footer";

export default function Home() {
  // 1. კალათის ფუნქციების ამოღება
  const { addToCart } = useCart();
  
  // 2. რაოდენობის სთეითი (Counter-ისთვის)
  const [quantity, setQuantity] = useState(1);

  // 3. პროდუქტის ობიექტი
  const product = {
    id: 5, // დარწმუნდი რომ უნიკალურია
    name: "ZX9 SPEAKER",
    price: 4500,
    image: earphone
  };

  // 4. კალათაში დამატების ფუნქცია
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <>
      <div className="headphone-container">
        <div className="Mask">
          <img src={earphone} alt="ZX9 Speaker" />
        </div>
        <div className="text-container3">
          <p className="orange-text">NEW PRODUCT</p>
          <h1>ZX9<br /> SPEAKER</h1>
          <p className="pharagrap"> Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
          <p className="price-text">$ 4,500</p>
          
          <div className="counter-container">
            {/* 5. ქაუნთერს გადავცემთ საჭირო პროპსებს */}
            <Counter 
              quantity={quantity}
              onIncrease={() => setQuantity(prev => prev + 1)}
              onDecrease={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}
            />
            {/* 6. ღილაკს ვაბამთ ფუნქციას */}
            <button className="first-button" onClick={handleAddToCart}>
               ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <div className="features-container">
        <div>
          <h1 className="features">FEATURES</h1>
          <p className="feature-p">
            Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).
            <br /><br />
            Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.
          </p>
        </div>

        <div>
          <h1 className="features">IN THE BOX</h1>
          <div className="place">
            <div className="amount">
              <p style={{ color: '#D87D4A', fontWeight: 'bold' }}>2x</p>
              <p style={{ color: '#D87D4A', fontWeight: 'bold' }}>2x</p>
              <p style={{ color: '#D87D4A', fontWeight: 'bold' }}>1x</p>
              <p style={{ color: '#D87D4A', fontWeight: 'bold' }}>1x</p>
              <p style={{ color: '#D87D4A', fontWeight: 'bold' }}>1x</p>
            </div>
            <div className="name">
              <p>Speaker Unit</p>
              <p>Speaker Cloth Panel</p>
              <p>User Manual</p>
              <p>3.5mm 10m Audio Cable</p>
              <p>10m Optical Cable</p>
            </div>
          </div>
        </div>
      </div>

      <div className="image-container">
        <div className="layout">
          <img className="firstimg" src={Firstimg} alt="Gallery 1" />
          <img className="secondimg" src={Secondimg} alt="Gallery 2" />
        </div>
        <img className="thirdimg" src={Thirdimg} alt="Gallery 3" />
      </div>

      <MayLike />
      <Options />
      <Container />
      <Footer />
    </>
  );
}