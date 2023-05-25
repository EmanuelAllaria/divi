import React from 'react';
import Banner1 from '../img/bg-1.jpg';

function Banner() {
  return (
    <section>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={Banner1} alt="First slide"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner