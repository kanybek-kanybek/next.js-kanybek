import './../Featured/Featured.css';
import Image from 'next/image';
import fearuredImgLogo from '../../public/assets/Frame 619.png';
import featuredImgOne from '../../public/assets/Frame 123.png';
import featuredImgTwo from '../../public/assets/Frame 1234.png';

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
                </div>
                <div className="featured__card__two">
                  <Image src={featuredImgTwo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
