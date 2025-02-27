import { assets } from "../../assets/assets";
import "./Footer.css"

export const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            perspiciatis unde, ipsam repudiandae recusandae nam obcaecati
            molestiae tempora aut doloribus?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get In Touch</h2>
            <ul>
                <li>+233546169405</li>
                <li>emmanuelletsu18@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <div className="footer-copyright">Copyright &copy; Joe.dev</div>
    </div>
  );
};