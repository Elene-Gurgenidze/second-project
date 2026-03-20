import headphone from "../assets/Headphones.png";
import speaker from "../assets/Speaker.png";
import earphones from "../assets/Earphones.png";

export default function Option() {
    return (
        <div className="option-container">

  <div className="option">
    <div className="image-wrapper">
      <img className="option-image" src={headphone} alt="Headphones" />
      <p className="option-name">Headphones</p>

      <div className="shop-row">
        <a className="shop-butt" href="/headphones">SHOP</a>
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
          <path d="M0.707153 0.707092L5.70715 5.70709L0.707153 10.7071" stroke="#D87D4A" strokeWidth="2" />
        </svg>
      </div>
    </div>
  </div>

  <div className="option">
    <div className="image-wrapper">
      <img className="option-image" src={speaker} alt="Speaker" />
      <p className="option-name">Speakers</p>

      <div className="shop-row">
        <a className="shop-butt" href="/speakers">SHOP</a>
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
          <path d="M0.707153 0.707092L5.70715 5.70709L0.707153 10.7071" stroke="#D87D4A" strokeWidth="2" />
        </svg>
      </div>
    </div>
  </div>

  <div className="option">
    <div className="image-wrapper">
      <img className="option-image" src={earphones} alt="Earphones" />
      <p className="option-name margin">Earphones</p>

      <div className="shop-row">
        <a className="shop-butt" href="/earphones">SHOP</a>
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
          <path d="M0.707153 0.707092L5.70715 5.70709L0.707153 10.7071" stroke="#D87D4A" strokeWidth="2" />
        </svg>
      </div>
    </div>
  </div>

</div>
    );
}