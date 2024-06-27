import { React } from "react";
import "../Styles/Home.css";
import { BsTwitterX } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";

import { FaShopLock } from "react-icons/fa6";
import { RiAdvertisementFill } from "react-icons/ri";
import { FaGift } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Shop</h4>
                    <ul>
                        <li>Men's Clothing</li>
                        <li>Women's Clothing</li>
                        <li>Kids' Clothing</li>
                        <li>Accessories</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Help & Support</h4>
                    <ul>
                        <li>Contact Us</li>
                        <li>FAQ</li>
                        <li>Shipping</li>
                        <li>Returns & Exchanges</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Legal</h4>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Refund Policy</li>
                        <li>Accessibility</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Connect with Us</h4>
                    <ul>
                        <li>
                            <FaFacebookSquare style={{height: '18px', width: '18px', marginRight: '5px'}}/> Facebook
                        </li>
                        <li>
                            <BsTwitterX style={{height: '16px', width: '16px', marginRight: '5px'}}/> Twitter
                        </li>
                        <li>
                            <SiInstagram style={{height: '16px', width: '16px', marginRight: '5px'}}/> Instagram
                        </li>
                    </ul>
                </div>
            </div>


            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid #fff',
                padding: '15px'
            }}>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <FaShopLock style={{color: '#FFC200'}}/>
                    <span style={{marginLeft: '5px'}}>Become a Seller</span>
                </div>

                <div className="c4gehN" style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <RiAdvertisementFill style={{color: '#FFC200'}}/>
                    <span style={{marginLeft: '5px'}}>Advertise</span>
                </div>

                <div className="c4gehN" style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <FaGift style={{color: '#FFC200'}}/>
                    <span style={{marginLeft: '5px'}}>Gift Cards</span>
                </div>

                <div className="c4gehN" style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <IoMdHelpCircle style={{color: '#FFC200'}}/>
                    <span style={{marginLeft: '5px'}}>Help Center</span>
                </div>
            </div>


            <div style={{display: 'flex', justifyContent: 'center', width: '100%', padding: '10px'}}>
                <img
                    src="https://t3.ftcdn.net/jpg/04/86/77/04/360_F_486770467_9nd0TjY0owEdwkoUCvi85VfIJQTvQFKi.jpg"
                    alt="Payment methods"
                    style={{width: '100%'}}
                />
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Your Chakra Store. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
