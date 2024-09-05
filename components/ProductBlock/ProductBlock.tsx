import Image from 'next/image';
import img1 from '../../public/assets/img1.svg';
import img2 from '../../public/assets/img2.svg';
import img3 from '../../public/assets/img3.svg';
import './ProductBlock.css';
export default function ProductBlock() {
  return (
    <div>
      <section id="product">
        <div className="container">
          <div className="product">
            <Image className="productMainImage" src={img1} alt="" />
            <div className="productTime">
              <div className="productTImeH">
                <h1>Flash Sales</h1>
                <div>
                  <h6>Days</h6>
                  <h4>03</h4>
                </div>
                <div>
                  <h6>Hours</h6>
                  <h4>23</h4>
                </div>
                <div>
                  <h6>Minutes</h6>
                  <h4>19</h4>
                </div>
                <div>
                  <h6>Seconds</h6>
                  <h4>56</h4>
                </div>
              </div>
              <div className="productTimeImage">
                <Image src={img2} alt="text" />
                <Image src={img3} alt="text" />
              </div>
            </div>
            <div className="productImage"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
