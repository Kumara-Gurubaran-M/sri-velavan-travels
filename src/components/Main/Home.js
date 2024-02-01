import React, { useEffect, useState } from 'react'
import Templebg from '../../images/rameswaram-bg.webp'
import LowPrice from '../../images/lowprice.png'
import Staff from "../../images/staff.png"
import Reliable from "../../images/reliable.png"
import Toyato from "../../images/toyota-logos.png"
import Mahindra from "../../images/mahindra_logo.png"
import Swift from "../../images/swift.png"
import Templetour from "../../images/sri-ranganathasvamy.png"
import island from "../../images/Adventures.png"
import history from "../../images/expedition.png"
import beach from "../../images/summer-holidays.png"

const Home = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const whyServiceData = [
        { img: LowPrice, title: "Low prices", content: "Sri Velavan Travels top-class service at affordable price." },
        { img: Staff, title: "Experience staff", content: "We hire the best experts in everything concerning car rentals." },
        { img: Reliable, title: "Reliable support", content: "Our team guarantees reliable support in addition to the offered service" },
    ]

    const brandData = [
        { img: Toyato, alt: "Toyoto" },
        { img: Mahindra, alt: "Mahindra" },
        { img: Swift, alt: "Swift" },
    ]

    const serviceData = [
        { img: Templetour, alt: "Temple Tours" },
        { img: beach, alt: "Beach Retreats" },
        { img: history, alt: "Historical Expeditions" },
        { img: island, alt: 'Island Adventures' }
    ]

    return (
        <div className='home'>
            <div className="parallax-container">
                <div className="parallax-content">
                    <img
                        src={Templebg}
                        alt="Background"
                        className="parallax-bg"
                        style={{ transform: `translateY(${offset * 0.5}px)` }}
                    />
                    <div data-aos="zoom-in-up" data-aos-duration="2000" className="parallax-text">
                        <h1>Sri Velavan Travels</h1>
                        <p>Travel Agency in Rameswaram, open 24/7 and call to explore Rameshwaram</p>
                        <button>CALL: 9940963631 </button>
                    </div>
                </div>
            </div>

            <section className='ourservice-container '>
                <h2 data-aos="zoom-in" data-aos-duration="2000">Our Service</h2>
                <div className='ourservice-section'>
                    {serviceData.map((data, index) => (
                        <article key={index} className='ourservice-content'>
                            <img data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" src={data.img} />
                            <h4 data-aos="zoom-in-down" data-aos-duration="1800">{data.alt}</h4>

                        </article>
                    ))}
                </div>
            </section>

            <section className='service-container'>
                <h2 data-aos="zoom-in" data-aos-duration="2000">Why choose our Service</h2>
                <div className='service-section'>
                    {whyServiceData.map((data, index) => (
                        <article key={index} className='service-content'>
                            <img data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" src={data.img} />
                            <h4 data-aos="zoom-in-down" data-aos-duration="1800">{data.title}</h4>
                            <p data-aos="zoom-in-down" data-aos-duration="1600">{data.content}</p>
                        </article>
                    ))}
                </div>

            </section>

            <section className='brand-container'>
                <h2 data-aos="zoom-in" data-aos-duration="2000">The most popular car brands that we rent</h2>
                <div className='brand-section'>
                    {brandData.map((data, index) => (
                        <article key={index} className='brand-content'>
                            <img data-aos="fade-up"
                                data-aos-anchor-placement="center-center" src={data.img} />
                        </article>
                    ))}
                </div>

            </section>


        </div>
    );
};

export default Home;