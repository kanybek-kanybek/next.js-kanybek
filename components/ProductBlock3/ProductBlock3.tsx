import Image from 'next/image';
import img1 from '../../public/assets/Frame 620.png';
import img2 from '../../public/assets/img2.svg';
import img3 from '../../public/assets/img3.svg';
import './ProductBlock3.css';
export default function ProductBlock3() {
  return (
    <div>
      <section id="product">
        <div className="container">
          <div className="product">
            <Image className="productMainImage" src={img1} alt="" />
            <div className="productTime">
              <div className="productTImeH">
                <h1>Best Selling Products</h1>
              </div>
              <div className="productTimeImage">
                <button>Vive All</button>
              </div>
            </div>
            <div className="productImage"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
