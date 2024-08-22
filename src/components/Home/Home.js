import React from 'react'
import "./Home.css"
import Product from '../Product/Product'
import { toast } from 'react-toastify';
import { useEffect } from 'react'
import faker from 'faker'
import { ToastContainer } from 'react-toastify';

const Home = () => {

    useEffect(() => (
        slider(0)
    ), [])

    return (
        <div className="home">
            <div className="home__container">
                {/* Image Banner */}
                <div className="home__toast-container">
                    <ToastContainer />
                </div>
                <div className="home__slider-container">
                    <div className="home__slide">
                        <img
                            className="home__image "
                            src="https://www.newhope.com/sites/newhope360.com/files/amazon-prime.png"
                            alt="image0" />
                    </div>
                    <div className="home__slide">
                        <img
                            className="home__image "
                            src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/WithoutRemorse/WORE_2021_GWBleedingHero_1500x600_Final_en-US_HO_TeaserCountdown_In4_._CB655000818_.jpg"
                            alt="image1" />
                    </div>
                    <div className="home__slide">
                        <img
                            className="home__image"
                            src="https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/Brand/JD/2021/Jan_default_onsite/XCM_Manual_1302634-gw_desk_tall-control-en-1x_a4828bce-9dbf-42ae-82d6-a6e42ead4ca4._CB411473854_.png"
                            alt="image2" />
                    </div>
                    <div className="home__slide">
                        <img
                            className="home__image"
                            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MGNiNTlmZmMt/MGNiNTlmZmMt-YTE4ODk1NjAt-w1500._CB657157338_.jpg"
                            alt="image3" />
                    </div>
                    <div className="home__slide">
                        <img
                            className="home__image"
                            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Nzg3NzIxZDct/Nzg3NzIxZDct-YjcyOGY2NDQt-w1500._CB412096479_.jpg"
                            alt="image4" />
                    </div>
                    <div className="home__slide">
                        <img
                            className="home__image"
                            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/SWSpringDeal_DMUX-4280/Gateway/DV2/US-EN_030821_SpringSitewide_ACQ_GW_Hero_D_1500x600_CV60._CB656151160_.jpg"
                            alt="image5" />
                    </div>
                    <div className="home__slide">
                        <img
                            className="home__image"
                            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NjA0N2YxY2It/NjA0N2YxY2It-NDg0ZTBmMDEt-w1500._CB655440701_.jpg"
                            alt="image6" />
                    </div>
                </div>
                {/* Product id, title, price, rating, image */}
                <div className="home__row">
                    {/* Product */}
                    <Product
                        id={12320}
                        title="The Lean Startup"
                        price={10}
                        rating={4.5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    />
                    <Product
                        id={12321}
                        title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                        price={20}
                        rating={5}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                    />
                    <Product
                        id={12334}
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={3.5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                </div>
                <div className="home__row">
                    {/* Product */}
                    <Product
                        id={12323}
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id={12324}
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={2}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id={3254354345}
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>
                <div className="home__row">
                    {/* Product */}
                    <Product
                        id={90829332}
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
                <div className="home__row">
                    {/* Product */}
                    <Product
                        id={12326}
                        title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                        price={20}
                        rating={5}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                    />
                    <Product
                        id={12328}
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                    <Product
                        id={12327}
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id={12329}
                        title="The Lean Startup"
                        price={10}
                        rating={4.5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

function slider(counter) {
    const slides = document.querySelectorAll(".home__image");

    slides.forEach((slide, index) => {
        if (index !== counter) {
            slide.style.visibility = `hidden`
            slide.classList.add(`image-${index}`)
        }
    })
    moveCorousal(counter, slides, slides.length)
}

function moveCorousal(counter, slides, len) {

    if (slides) {

        if (counter >= len - 1)
            counter = 0
        else
            counter += 1

        slides.forEach((slide, index) => {
            if (index === counter) {
                slide.style.visibility = `visible`
            }
            else {
                slide.style.visibility = `hidden`
            }
        })

    }
    setTimeout(() => {
        moveCorousal(counter, slides, len);
    }, 5000)

    parseInt(counter) % 5 === 0 ? (
        setTimeout(() => {
            toast.info(`${faker.name.findName()} added new product to cart`, {
                position: "bottom-left"
            });
        }, 10500)
    ) : (
            setTimeout(() => {
            }, 21000)
        )

}

export default Home
