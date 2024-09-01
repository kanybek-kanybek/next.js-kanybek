import Image from 'next/image';
import './ProductCategories.css';
import { IoIosPhonePortrait } from 'react-icons/io';

export default function ProductCategories() {
  return (
    <section id="productCategories">
      <div className="container">
        <div className="productCategories">
          {/* cards  */}
          <div className="productCategoriesCard">
            <div className="productCardCategori">
              <h4>
                <IoIosPhonePortrait />
              </h4>
              <h3>Phones</h3>
            </div>
            <div className="productCardCategori">
              <h4>
                <IoIosPhonePortrait />
              </h4>
              <h3>Phones</h3>
            </div>
            <div className="productCardCategori">
              <h4>
                <IoIosPhonePortrait />
              </h4>
              <h3>Phones</h3>
            </div>
            <div className="productCardCategori">
              <h4>
                <IoIosPhonePortrait />
              </h4>
              <h3>Phones</h3>
            </div>
            <div className="productCardCategori">
              <h4>
                <IoIosPhonePortrait />
              </h4>
              <h3>Phones</h3>
            </div>
            <div className="productCardCategori">
              <h4>
                <IoIosPhonePortrait />
              </h4>
              <h3>Phones</h3>
            </div>
          </div>
          {/* card  */}
        </div>
        <hr className="productHr" />
      </div>
    </section>
  );
}
