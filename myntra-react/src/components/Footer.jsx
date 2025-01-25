import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      {" "}
      <footer>
        <div className="footer_container">
          <div className="footer_column">
            <h3>ONLINE SHOPPING</h3>

            <Link to="/men">Men</Link>
            <Link to="/women">Women</Link>
            <Link to="/kids">Kids</Link>
            <Link to="/livingandhome">Home & Living</Link>
            <Link to="/beauty">Beauty</Link>
            <Link to="#">Gift Card</Link>
            <Link to="#">Myntra Insider</Link>
          </div>

          <div className="footer_column">
            <h3>USEFUL LINK</h3>

            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <a href="#">Site Map</a>
            <a href="#">Corporate Information</a>
            <a href="#">Whitehat</a>
            <a href="#">Cleartrip</a>
          </div>

          <div className="footer_column">
            <h3>CUSTOMER POLICIES</h3>
            <a href="#">Contact Us</a>
            <a href="#">FAQ</a>
            <a href="#">T&C</a>
            <a href="#">Terms Of Use</a>
            <a href="#">Track Orders</a>
            <a href="#">Shipping</a>
            <a href="#">Cancellation</a> <a href="#">Returns</a>
            <a href="#">Privacy policy</a>
            <a href="#">Grievance Redressal</a>
          </div>

          <div className="footer_column">
            <h3>EXPERIENCE MYNTRA APP ON MOBILE</h3>
            <div>
              <a href="https://play.google.com/store/apps/details?id=com.myntra.android" target="_blank">
              <img
                src="images/google-play-logo.png"
                alt=""
                width={"140px"}
                height={"45px"}
              />
                </a>
              
              <a href="https://itunes.apple.com/in/app/myntra-indias-fashion-store/id907394059" target="_blank">
              <img
                src="images/app-store-logo.png"
                alt=""
                width={"140px"}
                height={"45px"}
              />
              </a>

            </div>
            <a href="#" style={{ fontWeight: "bold", marginTop: "20px" }}>
              KEEP IN TOUCH
            </a>
            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "5px",
              }}
            >
              <a
                href="https://www.facebook.com/"
                style={{
                  display: "flex",
                  gap: "20px",
                  fontSize: "24px",
                  marginTop: "0",
                  color: "black",
                }}
              >
                <FaFacebook />
              </a>

              <a
                href="https://x.com/"
                style={{
                  display: "flex",
                  gap: "20px",
                  fontSize: "24px",
                  marginTop: "0",
                  color: "black",
                }}
              >
                <FaXTwitter />
              </a>

              <a
                href="https://www.youtube.com/"
                style={{
                  display: "flex",
                  gap: "20px",
                  fontSize: "24px",
                  marginTop: "0",
                  color: "black",
                }}
              >
                <IoLogoYoutube />
              </a>

              <a
                href="https://www.instagram.com/  "
                style={{
                  display: "flex",
                  gap: "20px",
                  fontSize: "24px",
                  marginTop: "0",
                  color: "black",
                }}
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <hr />

        <div className="copyright">
          © 2025 www.myntra.com. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
