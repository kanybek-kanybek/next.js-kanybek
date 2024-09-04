import React from 'react';
import '../footer/footer.css';
import footerImg from '../../public/assets/photo_5364084896672373496_m.jpg';
import { RiFacebookLine } from 'react-icons/ri';
import { FiTwitter } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { RiLinkedinLine } from 'react-icons/ri';
import Image from 'next/image';

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="exclusive">
            <h1>Exclusive</h1>
            <h3>Subscribe</h3>
            <p>Get 10% off your first order</p>
            <input
              type="text"
              placeholder="Enter your email"
              className="exclusive-input"
            />
          </div>
          <div className="support">
            <h2>Support</h2>
            <p>
              111 Bijoy sarani, Dhaka,
              <br />
              DH 1515, Bangladesh.
            </p>
            <p>exclusive@email.com</p>
            <p>+880 1234 5678</p>
          </div>
          <div className="account">
            <h2>Account</h2>
            <p>My Account</p>
            <p>Login History</p>
            <p>Card</p>
            <p>Wish List</p>
            <p>Shop</p>
          </div>
          <div className="link">
            <h2>Quick Link</h2>
            <p>Privacy Policy</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
          <div className="download">
            <div className="download-first-block">
              <h2>Download App</h2>
              <p>Save $3 with App New User Only</p>
              <Image src={footerImg} alt="footer-img" />
            </div>
            <div className="download-second-block">
              <RiFacebookLine />
              <FiTwitter />
              <FiInstagram />
              <RiLinkedinLine />
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright Rimel 2022. All right reserved</p>
        </div>
        <div />
      </div>
    </footer>
  );
}

export default Footer;
