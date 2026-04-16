import { useState } from "react";
import { useCart } from "./context/CartContext"; 
import earphone from "../assets/Earphone3.png";
import Secondimg from "../assets/img-cont2-second.png";
import Thirdimg from "../assets/img-cont2-third.png";
import MayLike from "./MayLike";
import Options from "./Options";
import Container from "./Container";
import Footer from "./Footer";
import Firstimg from "../assets/img-cont2-first.png";

export default function Home() {
    // 1. შემოვიტანოთ addToCart ფუნქცია კონტექსტიდან
    const { addToCart } = useCart();

    // 2. შევქმნათ სთეითი რაოდენობისთვის
    const [quantity, setQuantity] = useState(1);

    // 3. პროდუქტის მონაცემები
    const product = {
        id:2, 
        name: "XX59",
        price: 899,
        image: earphone
    };

    // 4. დამატების ფუნქცია
    const handleAddToCart = () => {
        addToCart(product, quantity);
        console.log("Added to cart:", product.name, "Quantity:", quantity);
        alert("Product added to cart!");
    };

    return (
        <>
            <div className="headphone-container">
                <div className="Mask">
                    <img src={earphone} alt="Headphones" />
                </div>
                <div className="text-container3">
                    <h1>XX59 <br /> Headphones</h1>
                    <p className="pharagrap">
                        Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. 
                        The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
                    </p>
                    <p className="price-text">$ 899</p>
                    <div className="counter-container">
                        {/* რაოდენობის მართვა */}
                        <div className="quantity-selector" style={{ display: 'flex', alignItems: 'center', background: '#F1F1F1', padding: '10px', gap: '20px', marginRight: '15px' }}>
                            <button 
                                onClick={() => setQuantity(q => (q > 1 ? q - 1 : 1))}
                                style={{ border: 'none', cursor: 'pointer', opacity: 0.5 }}
                            > - </button>
                            <span>{quantity}</span>
                            <button 
                                onClick={() => setQuantity(q => q + 1)}
                                style={{ border: 'none', cursor: 'pointer', opacity: 0.5 }}
                            > + </button>
                        </div>
                        
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
                        These headphones have been created from durable, high-quality materials tough enough to take anywhere. 
                        Its compact folding design fuses comfort and minimalist style making it perfect for travel. 
                        Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.
                        <br /><br />
                        More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, 
                        hands-free calling when paired with a compatible smartphone.
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
                    <img className="firstimg" src={Firstimg} alt="Features 1" />
                    <img className="secondimg" src={Secondimg} alt="Features 2" />
                </div>
                <img className="thirdimg" src={Thirdimg} alt="Features 3" />
            </div>

            <MayLike />
            <Options />
            <Container />
            <Footer />
        </>
    );
}