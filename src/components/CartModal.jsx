import { useCart } from "./context/CartContext";
import { useNavigate } from "react-router-dom"; // 1. დაამატე ეს იმპორტი

export default function CartModal({ isOpen, onClose }) {
    const { cartItems, clearCart } = useCart();
    const navigate = useNavigate(); // 2. გამოიძახე ჰუკი

    if (!isOpen) return null;

    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    // 3. შექმენი ფუნქცია გადასვლისთვის
    const handleCheckout = () => {
        onClose(); // მოდალის დახურვა
        navigate("/checkout"); // გადამისამართება
    };

    return (
        <div className="cart-overlay" onClick={onClose} style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', justifyContent: 'flex-end'
        }}>
            <div className="cart-content" onClick={(e) => e.stopPropagation()} style={{
                background: 'white', width: '377px', marginTop: '90px', marginRight: '50px',
                padding: '30px', borderRadius: '8px', height: 'fit-content'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3>CART ({cartItems.length})</h3>
                    <button onClick={clearCart} style={{ border: 'none', background: 'none', textDecoration: 'underline', cursor: 'pointer', opacity: 0.5 }}>Remove all</button>
                </div>

                <div className="cart-items" style={{ margin: '30px 0', maxHeight: '400px', overflowY: 'auto' }}>
                    {cartItems.length === 0 ? (
                        <p style={{ textAlign: 'center', opacity: 0.5 }}>Your cart is empty</p>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                    <img src={item.image} alt={item.name} style={{ width: '64px', height: '64px', borderRadius: '8px', background: '#F1F1F1' }} />
                                    <div>
                                        <p style={{ fontWeight: 'bold', margin: 0 }}>{item.name.split(' ')[0]}</p>
                                        <p style={{ opacity: 0.5, margin: 0 }}>$ {item.price.toLocaleString()}</p>
                                    </div>
                                </div>
                                <div style={{ background: '#F1F1F1', padding: '5px 10px' }}>
                                    <span style={{ fontWeight: 'bold' }}>x{item.quantity}</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
                    <p style={{ opacity: 0.5 }}>TOTAL</p>
                    <p style={{ fontWeight: 'bold' }}>$ {totalPrice.toLocaleString()}</p>
                </div>

                {/* 4. დაუმატე onClick ფუნქცია */}
                <button 
                    onClick={handleCheckout}
                    disabled={cartItems.length === 0} // თუ კალათა ცარიელია, ღილაკი არ იმუშავებს
                    style={{
                        width: '100%', background: '#D87D4A', color: 'white', border: 'none',
                        padding: '15px', fontWeight: 'bold', cursor: cartItems.length === 0 ? 'not-allowed' : 'pointer',
                        opacity: cartItems.length === 0 ? 0.5 : 1
                    }}
                >
                    CHECKOUT
                </button>
            </div>
        </div>
    );
}