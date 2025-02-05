import React from 'react';
import '../styles/App.css';

const Footer = () => {
    return (
        <footer className="site-footer" id="colophon" role="contentinfo">
            <div className="footer-widget-area" role="complementary">
                <div className="footer-container">
                    <div className="footer-row">
                        <div className="footer-widget">
                            <div className="footer-socials">
                                <div className="site-branding" itemscope itemtype="http://schema.org/Organization">
                                    <a href="https://www.twire.se/" className="custom-logo-link" rel="home">
                                        <img src="https://www.twire.se/wp-content/uploads/2019/05/logo_spacing_1.svg" 
                                             alt="Twire" className="custom-logo" />
                                    </a>
                                </div>
                                <nav className="footer-socials__list" aria-label="Social Menu">
                                    <ul className="footer-menu">
                                        <li><a href="https://www.instagram.com/twire.se/" className="social-link">Instagram</a></li>
                                        <li><a href="https://www.facebook.com/twire.se/" className="social-link">Facebook</a></li>
                                        <li><a href="https://www.linkedin.com/company/14608186/admin/" className="social-link">LinkedIn</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="footer-widget">
                            <h2>SERVICES</h2>
                            <ul>
                                <li><a href="#">Strategic IT</a></li>
                                <li><a href="#">IT-Outsourcing</a></li>
                                <li><a href="#">Privacy & Data Protection</a></li>
                            </ul>
                        </div>
                        <div className="footer-widget">
                            <h2>COMPANY</h2>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">CSR</a></li>
                            </ul>
                        </div>
                        <div className="footer-widget">
                            <h2>LEGAL TERMS</h2>
                            <ul>
                                <li><a href="#">Code of Conduct</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Cookies</a></li>
                            </ul>
                        </div>
                        <div className="footer-widget">
                            <h2>CONTACT</h2>
                            <ul>
                                <li><a href="mailto:info@twire.se">info@twire.se</a></li>
                            </ul>
                        </div>
                        <div className="footer-widget">
                            <div className="footer-certifications">
                                <img src="https://www.twire.se/wp-content/uploads/2019/06/CIPM_logo-150x150.png" alt="CIPM" />
                                <img src="https://www.twire.se/wp-content/uploads/2019/06/CIPP-E_Seal_2013-web-150x150.png" alt="CIPP-E" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-info">
                <div className="footer-container">
                    <div className="footer-row">
                        <div className="footer-info__col-right">
                            <span>© 2025 Twire</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;