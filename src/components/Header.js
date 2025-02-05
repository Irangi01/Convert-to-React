import React from 'react';
import '../styles/App.css';

const Header = () => {
    return (
        <header className="site-header__wrap">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-xl-10 offset-xl-1">
                        <div className="site-header__elements">

                            {/* Mobile Menu Trigger */}
                            <div className="site-header__mobile">
                                <button className="site-header__mobile--trigger">
                                    <span className="site-header__mobile__icon"></span>
                                </button>
                            </div>

                            {/* Branding / Logo */}
                            <div className="site-header__branding">
                                <a href="https://www.twire.se/" className="custom-logo-link">
                                    <img src="https://www.twire.se/wp-content/uploads/2019/05/logo_spacing_1.svg" alt="Twire Logo" className="custom-logo" />
                                </a>
                            </div>

                            {/* Navigation Menu */}
                            <nav className="site-header__nav">
                                <ul className="menu">
                                    <li><a href="https://www.twire.se/about/">Meet Twire</a></li>
                                    <li><a href="https://www.twire.se/services-text/">Our Services</a></li>
                                    <li><a href="https://www.twire.se/work-with-twire/">Vacancies</a></li>
                                </ul>
                            </nav>

                            {/* Call to Action */}
                            <div className="site-header__cta">
                                <a className="btn btn--secondary" href="/get-in-touch/">Get in touch</a>
                            </div>

                            {/* AddThis Social Sharing */}
                            <div className="addthis_inline_share_toolbox"></div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;