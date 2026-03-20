import Men from "../assets/Men.png"

export default function Container() {
    return (
        <>
            <div className="main-container">
                <div  className="text-container1">
                    <h1 className="text">
                        Bringing you the<br />
                        <span className="highlight">best</span> audio gear
                    </h1>
                    <p className="pharagrap">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                </div>
                <div>
                <img className="men" src={Men} alt="Headphones" />
                    
                </div>
            </div>
        </>
    )
}