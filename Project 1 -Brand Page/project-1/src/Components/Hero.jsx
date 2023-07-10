const HeroSection = () => {
    return (
        <>
            <main className="hero container">

                <div className="hero-content">

                    <h1 className="hero__mainHeading">
                        YOUR FEET DESERVE THE BEST
                    </h1>

                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima doloribus quo nemo maxime repudiandae, nobis dolor suscipit itaque hic praesentium adipisci officia provident architecto cum!
                    </p>
                    <div className="hero-btn">
                        <button>
                            Shop Now
                        </button>
                        <button className="hero-btn__secondary-btn">
                            Category
                        </button>
                    </div>

                    <div className="shopping">
                        <p>
                            Also Available On
                        </p>

                        <div className="brand-icons">
                            <img src="./public/amazon.png" alt="amazon-logo" />
                            <img src="./public/flipkart.png" alt="flipkart-logo" />
                        </div>
                    </div>
                </div>
                
                <div className="hero-image">
                <img src="./public/shoe_image.png" alt="hero-image"/>
                </div>

            </main>
        </>
    )
}

export default HeroSection;