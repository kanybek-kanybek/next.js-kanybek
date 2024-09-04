import React from 'react';
import FeaturedCargoCar from './../../public/assets/Services123456.png';
import FeaturedCargoРeadphones from '../../public/assets/Services1234567.png';
import FeaturedCargoMoney from '../../public/assets/Services12345678.png';

import './../FeaturedCargo/FeaturedCargo.css';
import Image from 'next/image';

export default function FeaturedCargo() {
  return (
    <>
      <div className="wrap__featuredCargo">
        <div className="container">
          <div className="FeaturedCargo__content">
            <div className="FeaturedCargo__title">
              <h1>New Arrival </h1>
            </div>
            <div className="FeaturedCargo__cards">
              <div className="FeaturedCargo__card__one">
                <Image src={FeaturedCargoCar} alt="" />
                <h4>FREE AND FAST DELIVERY</h4>
                <p>Free delivery for all orders over $140</p>
              </div>
              <div className="FeaturedCargo__card__two">
                <Image src={FeaturedCargoРeadphones} alt="" />
                <h4>24/7 CUSTOMER SERVICE</h4>
                <p>Friendly 24/7 customer support</p>
              </div>
              <div className="FeaturedCargo__card__three">
                <Image src={FeaturedCargoMoney} alt="" />
                <h4>MONEY BACK GUARANTEE</h4>
                <p>We reurn money within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
