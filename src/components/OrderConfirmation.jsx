import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './context/CartContext';

export default function OrderConfirmation({ grandTotal }) {
    const navigate = useNavigate();
    const { cartItems, clearCart } = useCart();
    
    // ვიღებთ მხოლოდ პირველ ნივთს საჩვენებლად
    const firstItem = cartItems[0];
    const otherItemsCount = cartItems.length - 1;

    const handleBackHome = () => {
        clearCart(); // ვასუფთავებთ კალათას ყიდვის შემდეგ
        navigate('/'); // ვბრუნდებით მთავარ გვერდზე
    };

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 2000,
            display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px'
        }}>
            <div style={{
                background: 'white', maxWidth: '540px', width: '100%',
                padding: '48px', borderRadius: '8px'
            }}>
                {/* ნარინჯისფერი Checkmark ხატულა */}
                <div style={{
                    width: '64px', height: '64px', backgroundColor: '#D87D4A',
                    borderRadius: '50%', display: 'flex', justifyContent: 'center',
                    alignItems: 'center', marginBottom: '33px', color: 'white', fontSize: '30px'
                }}>✓</div>

                <h2 style={{ fontSize: '32px', lineHeight: '36px', marginBottom: '24px', letterSpacing: '1.1px' }}>
                    THANK YOU <br /> FOR YOUR ORDER
                </h2>
                <p style={{ opacity: 0.5, marginBottom: '33px' }}>You will receive an email confirmation shortly.</p>

                {/* ნაცრისფერი და შავი ბლოკი */}
                <div style={{ display: 'flex', borderRadius: '8px', overflow: 'hidden', marginBottom: '46px' }}>
                    {/* მარცხენა მხარე - პროდუქტები */}
                    <div style={{ backgroundColor: '#F1F1F1', padding: '24px', flex: 1.5 }}>
                        {firstItem && (
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: otherItemsCount > 0 ? '1px solid rgba(0,0,0,0.1)' : 'none', paddingBottom: '12px' }}>
                                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                    <img src={firstItem.image} alt="" style={{ width: '50px', height: '50px' }} />
                                    <div>
                                        <p style={{ fontWeight: 'bold', margin: 0 }}>{firstItem.name.split(' ')[0]}</p>
                                        <p style={{ opacity: 0.5, margin: 0 }}>$ {firstItem.price.toLocaleString()}</p>
                                    </div>
                                </div>
                                <p style={{ opacity: 0.5, fontWeight: 'bold' }}>x{firstItem.quantity}</p>
                            </div>
                        )}
                        {otherItemsCount > 0 && (
                            <p style={{ textAlign: 'center', opacity: 0.5, fontSize: '12px', marginTop: '12px', fontWeight: 'bold' }}>
                                and {otherItemsCount} other item(s)
                            </p>
                        )}
                    </div>

                    {/* მარჯვენა მხარე - Grand Total */}
                    <div style={{ backgroundColor: 'black', color: 'white', padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <p style={{ opacity: 0.5, fontSize: '15px', marginBottom: '8px' }}>GRAND TOTAL</p>
                        <p style={{ fontWeight: 'bold', fontSize: '18px' }}>$ {grandTotal.toLocaleString()}</p>
                    </div>
                </div>

                <button onClick={handleBackHome} className="first-button" style={{ width: '100%' }}>
                    BACK TO HOME
                </button>
            </div>
        </div>
    );
}