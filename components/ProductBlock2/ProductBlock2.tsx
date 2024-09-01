import Image from 'next/image';
import img1 from '../../public/assets/cat.png';
import img2 from '../../public/assets/img2.svg';
import img3 from '../../public/assets/img3.svg';
import './ProductBlock2.css';
export default function ProductBlock2() {
  return (
    <div>
      <section id="product">
        <div className="container">
          <div className="product">
            <Image className="productMainImage" src={img1} alt="" />
            <div className="productTime">
              <div className="productTImeH">
                <h1>Browse By Category</h1>
              </div>
              <div className="productTimeImage">
                <Image src={img2} alt="" />
                <Image src={img3} alt="" />
              </div>
            </div>
            <div className="productImage"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
