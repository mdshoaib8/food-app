import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer" id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="Logo" />
                    <p>
                        Delivering fresh, delicious meals directly from your favorite local restaurants right to your doorstep. Satisfy your daily cravings with quick and easy online ordering.
                    </p>
                    <div className="footer-social-icons">
                        <img src={assets.facebookIcon} alt="" />
                        <img src={assets.twitterIcon} alt="" />
                        <img src={assets.linkedinIcon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+880-1770-120066</li>
                        <li>abc@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2027 © Tomato.com - All Right Reserved.
            </p>
        </div>
    )
}

export default Footer