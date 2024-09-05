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
              <div className="featured__card">
                <div className="featured__card__one">
                  <Image src={featuredImgOne} alt="" />
                  <h3>PlayStation 5</h3>
                  <p>Black and White version of the PS5 coming out on sale.</p>
                  <a href="#">Shop Now</a>
                </div>
                <div className="featured__card__two">
                  <Image
                    className="featured__card__two__img1"
                    src={featuredImgTwo}
                    alt=""
                  />
                  <div className="featured__card__three">
                    <Image
                      className="featured__card__two__img2"
                      src={featuredImgThree}
                      alt=""
                    />
                    <Image
                      className="featured__card__two__img3"
                      src={featuredImgFo}
                      alt=""
                    />
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
