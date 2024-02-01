import React from 'react'


function Typesofcars() {

    return (
        <div className='car-rental-container'>
            <section>
                <h1 data-aos="zoom-in" data-aos-duration="3000">Available Cars</h1>
                <h3 data-aos="zoom-in" data-aos-duration="2000">The most popular car we rent</h3>

                <div className='car-section'>
                    <section className='car car-1' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <h5 data-aos="fade-up-right" data-aos-duration="1000">Innova</h5>
                    </section>

                    <section className='car car-2' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <h5 data-aos="fade-up-right" data-aos-duration="1000">Mahindra Van</h5>
                    </section>

                    <section className='car car-3' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <h5 data-aos="fade-up-right" data-aos-duration="1000">Swift</h5>
                    </section>
                    <section className='car car-4' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <h5 data-aos="fade-up-right" data-aos-duration="1000">Toyoto</h5>
                    </section>
                    <section className='car car-5' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <h5 data-aos="fade-up-right" data-aos-duration="1000">Xylo</h5>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Typesofcars