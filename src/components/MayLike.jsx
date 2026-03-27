import headphone from "../assets/Headphones.png";
import speaker from "../assets/Speaker.png";
import earphone3 from "../assets/Earphone3.png"

export default function MayLike() {
    return (
        <>
            <div className="May-like-container">
                <h1 className="font">YOU MAY ALSO LIKE</h1>

                <div className="direction">
                    <div className="May-like-container-inner">
                        <img className="smallimage" src={headphone} alt="Headphones" />

                    </div>

                    <div className="May-like-container-inner">
                        <img className="smallimage" src={speaker} alt="Headphones" />

                    </div>

                    <div className="May-like-container-inner">
                        <img className="smallimage" src={earphone3} alt="Headphones" />

                    </div>
                </div>

                <div className="direction">
                    <div className="May-like-container-inner1">
                        <p className="font1"> XX00 MARK I</p>
                        <button className="first-button">SEE PRODUCT</button>
                    </div>

                    <div className="May-like-container-inner1">
                        <p className="font1">ZX9 SPEAKER</p>
                        <button className="first-button">SEE PRODUCT</button>

                    </div>

                    <div className="May-like-container-inner1">
                        <p className="font1">XX59</p>
                        <button className="first-button">SEE PRODUCT</button>

                    </div>
                </div>


            </div>
        </>
    );
}