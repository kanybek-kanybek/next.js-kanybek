import Image from 'next/image';
import main from '../../public/assets/Frame 560.png';
import './MainBlock.css';

export default function MainBlock() {
  return (
    <div>
      <seciton id="mainBlock">
        <div className="container">
          <div div className="mainBlock">
            <div className="mainNavBar">
              <h4>Woman’s Fashion</h4>
              <h4>Men’s Fashion</h4>
              <h4>Electronics</h4>
              <h4>Home & Lifestyle</h4>
              <h4>Medicine </h4>
              <h4>Sports & Outdoor</h4>
              <h4>Baby’s & Toys</h4>
              <h4>Groceries & Pets</h4>
              <h4>Health & Beauty</h4>
            </div>
            <div className="mainPhoto">
              <Image src={main} alt="" />
            </div>
          </div>
        </div>
      </seciton>
    </div>
  );
}
