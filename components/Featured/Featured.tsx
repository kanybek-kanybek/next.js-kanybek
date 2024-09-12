import './../Featured/Featured.css';
import Image from 'next/image';
import fearuredImgLogo from '../../public/assets/Frame 619.png';
import featuredImgOne from '../../public/assets/featuredImgOne1 1.png';
import featuredImgTwo from '../../public/assets/featuredImgTwo2.png';
import featuredImgThree from '../../public/assets/featuredImgThree3.png';
import featuredImgFo from '../../public/assets/featuredImgFo4.png';

export default function Featured() {
  return (
    <>
      <div className="wrap__featured">
        <div className="container">
          <div className="featured__content">
            <div className="featured__title">
              <Image src={fearuredImgLogo} alt="" />
              <h1>New Arrival </h1>
            </div>
            <div className="featured__cards">
              <div className="featured__card featured__card__large">
                <Image src={featuredImgOne} alt="PlayStation 5" />
                <div className="text__overlay">
                  <h3>PlayStation 5</h3>
                  <p>
                    Black and White version of the PS5 <br /> coming out on
                    sale.
                  </p>
                  <a href="#">Shop Now</a>
                </div>
              </div>
              <div className="featuredCardTwo">
                <div className="featured__card">
                  <Image
                    className="img1"
                    src={featuredImgTwo}
                    alt="Women's Collections"
                  />
                  <div className="text__overlay">
                    <h3>Women s Collections</h3>
                    <p>
                      Featured women collections that give you another vibe.
                    </p>
                    <a href="#">Shop Now</a>
                  </div>
                </div>

                <div className="cardTwoMain">
                  <div className="featured__card mainCard">
                    <Image src={featuredImgThree} alt="Speakers" />
                    <div className="text__overlay">
                      <h3>Speakers</h3>
                      <p>Amazon wireless speakers</p>
                      <a href="#">Shop Now</a>
                    </div>
                  </div>

                  <div className="featured__card mainCard">
                    <Image src={featuredImgFo} alt="Perfume" />
                    <div className="text__overlay">
                      <h3>Perfume</h3>
                      <p>GUCCI INTENSE OUD EDP</p>
                      <a href="#">Shop Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
