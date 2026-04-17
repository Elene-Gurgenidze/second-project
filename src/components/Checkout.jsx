import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './context/CartContext';
import OrderConfirmation from './OrderConfirmation';

export default function Checkout() {
    const navigate = useNavigate();
    const { cartItems = [], totalPrice = 0 } = useCart();
    const [isFinished, setIsFinished] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("emoney");

    const shipping = 50;
    const vat = Math.round(totalPrice * 0.2);
    const grandTotal = totalPrice + shipping;

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsFinished(true);
    };

    return (
        <div style={{ backgroundColor: '#F2F2F2', minHeight: '100vh', paddingBottom: '100px' }}>
            <div className="container" style={{ maxWidth: '1110px', margin: '0 auto', paddingTop: '80px' }}>
                <button 
                    onClick={() => navigate(-1)} 
                    style={{ border: 'none', background: 'none', cursor: 'pointer', opacity: 0.5, marginBottom: '40px', fontSize: '15px', fontWeight: '500' }}
                >
                    Go Back
                </button>

                <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '30px', alignItems: 'start' }}>
                    
                    <div style={{ backgroundColor: 'white', padding: '48px', borderRadius: '8px' }}>
                        <h1 style={{ marginBottom: '40px', fontSize: '32px', letterSpacing: '1.1px' }}>CHECKOUT</h1>

                        <h6 style={{ color: '#D87D4A', marginBottom: '16px', fontSize: '13px', letterSpacing: '0.9px', textTransform: 'uppercase' }}>Billing Details</h6>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px 16px', marginBottom: '53px' }}>
                            <div className="input-group">
                                <label>Name</label>
                                <input type="text" placeholder="Alexei Ward" required />
                            </div>
                            <div className="input-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="alexei@mail.com" required />
                            </div>
                            <div className="input-group">
                                <label>Phone Number</label>
                                <input type="tel" placeholder="+1 202-555-0136" required />
                            </div>
                        </div>

                        <h6 style={{ color: '#D87D4A', marginBottom: '16px', fontSize: '13px', letterSpacing: '0.9px', textTransform: 'uppercase' }}>Shipping Info</h6>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px 16px', marginBottom: '61px' }}>
                            <div style={{ gridColumn: 'span 2' }} className="input-group">
                                <label>Address</label>
                                <input type="text" placeholder="1137 Williams Avenue" required />
                            </div>
                            <div className="input-group">
                                <label>ZIP Code</label>
                                <input type="text" placeholder="10001" required />
                            </div>
                            <div className="input-group">
                                <label>City</label>
                                <input type="text" placeholder="New York" required />
                            </div>
                            <div className="input-group">
                                <label>Country</label>
                                <input type="text" placeholder="United States" required />
                            </div>
                        </div>

                        <h6 style={{ color: '#D87D4A', marginBottom: '16px', fontSize: '13px', letterSpacing: '0.9px', textTransform: 'uppercase' }}>Payment Details</h6>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            <label style={{ fontWeight: 'bold', fontSize: '12px' }}>Payment Method</label>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div className={`radio-box ${paymentMethod === 'emoney' ? 'active' : ''}`} onClick={() => setPaymentMethod('emoney')}>
                                    <input type="radio" checked={paymentMethod === 'emoney'} readOnly />
                                    <span>e-Money</span>
                                </div>
                                <div className={`radio-box ${paymentMethod === 'cash' ? 'active' : ''}`} onClick={() => setPaymentMethod('cash')}>
                                    <input type="radio" checked={paymentMethod === 'cash'} readOnly />
                                    <span>Cash on Delivery</span>
                                </div>
                            </div>
                        </div>

                        {paymentMethod === 'emoney' && (
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '30px' }}>
                                <div className="input-group">
                                    <label>e-Money Number</label>
                                    <input type="text" placeholder="238521993" required />
                                </div>
                                <div className="input-group">
                                    <label>e-Money PIN</label>
                                    <input type="text" placeholder="6891" required />
                                </div>
                            </div>
                        )}
                    </div>

                    <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '8px' }}>
                        <h3 style={{ marginBottom: '32px', fontSize: '18px', letterSpacing: '1.3px' }}>SUMMARY</h3>
                        <div style={{ marginBottom: '32px' }}>
                            {cartItems.map(item => (
                                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                        <img src={item.image} alt="" style={{ width: '64px', height: '64px', borderRadius: '8px' }} />
                                        <div>
                                            <p style={{ fontWeight: 'bold', margin: 0, fontSize: '15px' }}>{item.name?.split(' ')[0]}</p>
                                            <p style={{ opacity: 0.5, margin: 0, fontSize: '14px', fontWeight: 'bold' }}>$ {(item.price || 0).toLocaleString()}</p>
                                        </div>
                                    </div>
                                    <p style={{ opacity: 0.5, fontWeight: 'bold' }}>x{item.quantity}</p>
                                </div>
                            ))}
                        </div>

                        <div className="summary-row"><span>TOTAL</span> <strong>$ {(totalPrice || 0).toLocaleString()}</strong></div>
                        <div className="summary-row"><span>SHIPPING</span> <strong>$ {shipping}</strong></div>
                        <div className="summary-row"><span>VAT (INCLUDED)</span> <strong>$ {vat.toLocaleString()}</strong></div>
                        <div className="summary-row" style={{ marginTop: '24px' }}>
                            <span>GRAND TOTAL</span> 
                            <strong style={{ color: '#D87D4A' }}>$ {(grandTotal || 0).toLocaleString()}</strong>
                        </div>

                        <button type="submit" className="first-button" style={{ width: '100%', marginTop: '32px', padding: '15px', fontWeight: 'bold', cursor: 'pointer' }}>
                            CONTINUE & PAY
                        </button>
                    </div>
                </form>
            </div>

            {isFinished && <OrderConfirmation grandTotal={grandTotal} />}
        </div>
    );
}