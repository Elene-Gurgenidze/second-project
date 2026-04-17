import { useState } from "react";
import { useCart } from "./context/CartContext";
import earphone from "../assets/Earphone2.png";
import Counter from "./Counter";
import MayLike from "./MayLike";
import Options from "./Options";
import Container from "./Container";
import Footer from "./Footer";
import Firstimg from "../assets/img-cont1.png";
import Secondimg from "../assets/img-cont1.png";
import Thirdimg from "../assets/img-cont3.png";

export default function MarkI() {
    const { addToCart } = useCart();
    
    const [quantity, setQuantity] = useState(1);

    const product = {
        id: 3,
        name: "XX99 Mark I",
        price: 1750,
        image: earphone
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    return (
        <>
            <div className="headphone-container">
                <div className="Mask">
                    <img src={earphone} alt="XX99 Mark I Headphones" />
                </div>
                <div className="text-container3">
                    <h1>XX99 Mark I<br /> Headphones</h1>
                    <p className="pharagrap">
                        As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
                    </p>
                    <p className="price-text">$ 1,750</p>
                    <div className="counter-container">
                        <Counter 
                            quantity={quantity} 
                            onIncrease={() => setQuantity(prev => prev + 1)}
                            onDecrease={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}
                        />
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
                        As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.
                        <br /><br />
                        From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber.
                    </p>
                </div>

                <div>
                    <h1 className="features">IN THE BOX</h1>
                    <div className="place">
                        <div className="amount">
                            <p style={{ color: '#D87D4A', fontWeight: 'bold' }}>1x</p>
                            <p style={{ color: '#D87D4A', fontWeight: 'bold' }}>2x</p>
                            <p style={{ color: '#D87D4A', fontWeight: 'bold' }}>1x</p>
                            <p style={{ color: '#D87D4A', fontWeight: 'bold' }}>1x</p>
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
                    <img className="firstimg" src={Firstimg} alt="Headphones view 1" />
                    <img className="secondimg" src={Secondimg} alt="Headphones view 2" />
                </div>
                <img className="thirdimg" src={Thirdimg} alt="Headphones view 3" />
            </div>

            <MayLike />
            <Options />
            <Container />
            <Footer />
        </>
    );
}