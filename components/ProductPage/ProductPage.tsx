import { FaRegHeart } from 'react-icons/fa6';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import gameImage from '../../public/assets/game.png';
import Image from 'next/image';
import './ProductPage.css';
import imageLike from '../../public/assets/Vector.png';
export default function ProductPage() {
  const arrayLike = [
    imageLike,
    imageLike,
    imageLike,
    imageLike,
    imageLike,
    imageLike,
    imageLike,
    imageLike,
    imageLike,
    imageLike,
    imageLike,
    imageLike,
    imageLike,
    imageLike,
  ];

  return (
    <section id="productPage">
      <div className="container">
        <div className="productPage">
          {/* cards  */}
          <div className="productCard">
            <div className="productImage">
              <div className="productImg">
                <Image src={gameImage} alt="" />
              </div>
              <h3>-40%</h3>
              <div className="productLike">
                <h2>
                  <FaRegHeart />
                </h2>
                <h2>
                  <MdOutlineRemoveRedEye />
                </h2>
              </div>
            </div>
            <h4>HAVIT HV-G92 Gamepad</h4>
            <div className="productPrice">
              <h2>$120</h2>
              <h2
                style={{
                  color: '#000000',
                }}
                className="productPriceSale"
              >
                $160
              </h2>
            </div>
            <div className="lik">
              {arrayLike.slice(0, 5).map((item, index) => (
                <div key={index} className="productLikeImage">
                  <Image src={item} alt="" />
                </div>
              ))}
              <h3>({arrayLike.length})</h3>
            </div>
          </div>
          <div className="productCard">
            <div className="productImage">
              <div className="productImg">
                <Image src={gameImage} alt="" />
              </div>
              <h3>-40%</h3>
              <div className="productLike">
                <h2>
                  <FaRegHeart />
                </h2>
                <h2>
                  <MdOutlineRemoveRedEye />
                </h2>
              </div>
            </div>
            <h4>HAVIT HV-G92 Gamepad</h4>
            <div className="productPrice">
              <h2>$120</h2>
              <h2
                style={{
                  color: '#000000',
                }}
                className="productPriceSale"
              >
                $160
              </h2>
            </div>
            <div className="lik">
              {arrayLike.slice(0, 5).map((item, index) => (
                <div key={index} className="productLikeImage">
                  <Image src={item} alt="" />
                </div>
              ))}
              <h3>({arrayLike.length})</h3>
            </div>
          </div>
          <div className="productCard">
            <div className="productImage">
              <div className="productImg">
                <Image src={gameImage} alt="" />
              </div>
              <h3>-40%</h3>
              <div className="productLike">
                <h2>
                  <FaRegHeart />
                </h2>
                <h2>
                  <MdOutlineRemoveRedEye />
                </h2>
              </div>
            </div>
            <h4>HAVIT HV-G92 Gamepad</h4>
            <div className="productPrice">
              <h2>$120</h2>
              <h2
                style={{
                  color: '#000000',
                }}
                className="productPriceSale"
              >
                $160
              </h2>
            </div>
            <div className="lik">
              {arrayLike.slice(0, 5).map((item, index) => (
                <div key={index} className="productLikeImage">
                  <Image src={item} alt="" />
                </div>
              ))}
              <h3>({arrayLike.length})</h3>
            </div>
          </div>
          <div className="productCard">
            <div className="productImage">
              <div className="productImg">
                <Image src={gameImage} alt="" />
              </div>
              <h3>-40%</h3>
              <div className="productLike">
                <h2>
                  <FaRegHeart />
                </h2>
                <h2>
                  <MdOutlineRemoveRedEye />
                </h2>
              </div>
            </div>
            <h4>HAVIT HV-G92 Gamepad</h4>
            <div className="productPrice">
              <h2>$120</h2>
              <h2
                style={{
                  color: '#000000',
                }}
                className="productPriceSale"
              >
                $160
              </h2>
            </div>
            <div className="lik">
              {arrayLike.slice(0, 5).map((item, index) => (
                <div key={index} className="productLikeImage">
                  <Image src={item} alt="" />
                </div>
              ))}
              <h3>({arrayLike.length})</h3>
            </div>
          </div>
          <div className="productCard">
            <div className="productImage">
              <div className="productImg">
                <Image src={gameImage} alt="" />
              </div>
              <h3>-40%</h3>
              <div className="productLike">
                <h2>
                  <FaRegHeart />
                </h2>
                <h2>
                  <MdOutlineRemoveRedEye />
                </h2>
              </div>
            </div>
            <h4>HAVIT HV-G92 Gamepad</h4>
            <div className="productPrice">
              <h2>$120</h2>
              <h2
                style={{
                  color: '#000000',
                }}
                className="productPriceSale"
              >
                $160
              </h2>
            </div>
            <div className="lik">
              {arrayLike.slice(0, 5).map((item, index) => (
                <div key={index} className="productLikeImage">
                  <Image src={item} alt="" />
                </div>
              ))}
              <h3>({arrayLike.length})</h3>
            </div>
          </div>
          {/* card  */}
        </div>
        <div className="productAllProduct">
          <button>View All Products</button>
        </div>
        <hr className="productHr" />
      </div>
    </section>
  );
}
