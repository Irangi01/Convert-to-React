import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            {/* Other sections of the website can be added here */}
            <main>
                <h5 className="in-view__child in-view__child--fadein in-view__child--in">
                    Strategic IT solutions &amp; outsourcing, privacy &amp; data protection –
                </h5>
                <h1 className="display-one in-view__child in-view__child--fadein in-view__child--in">
                    Innovations that move your business forward
                </h1>
                <div className="wp-block-pixudio-wildcard section">
                    <div className="reveal in-view reveal--primary reveal--right reveal--darken reveal--fixed in-view--in">
                        <div className="reveal__frame">
                            <figure className="reveal__background lazyload--el lazyloaded" data-id="15526" 
                                data-bg="https://www.twire.se/wp-content/uploads/2019/06/Twire-38-of-141.jpg" 
                                style={{ backgroundImage: "url('https://www.twire.se/wp-content/uploads/2019/06/Twire-38-of-141.jpg')" }}>
                            </figure>
                        </div>
                        <h3 className="reveal__title in-view__child in-view__child--fadein in-view__child--in">
                            We create strategies, <br />innovation &amp; growth.
                        </h3>
                        <div className="reveal__copy indent">
                            <p className="reveal__content in-view__child in-view__child--fadein in-view__child--in">
                                Twire is a consultancy firm focused on strategic IT and software development connecting top expertise 
                                with clients worldwide. Over more than a decade we have collected a huge experience within IT and now 
                                help our clients to build their outsourcing solutions, high-performance distributed teams, strategic 
                                IT solutions as well as privacy program and data protection. Twire uses a customised and unique 
                                qualification process to gather and offer only the best developers and services available. Twire is 
                                based in Colombo, Sri Lanka, with Swedish founders, global customers, and top-notch talent.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="sponsors">
                    <h3>Some brands we worked with</h3>
                    <div className="sponsors-container">
                        <div className="company"><img src="https://www.twire.se/wp-content/uploads/2019/06/AcquestLogo.png" alt="Aquest" /></div>
                        <div className="company"><img src="https://www.twire.se/wp-content/uploads/2019/06/Svensklåneförmedlinglogo.png" alt="Svensklåneförmedling" /></div>
                        <div className="company"><img src="https://www.twire.se/wp-content/uploads/2019/06/EffectSoft-Logo-e1561097466118.png" alt="Effectsoft" /></div>
                        <div className="company"><img src="https://www.twire.se/wp-content/uploads/2019/06/MinKalenderLogo-e1561097499966.png" alt="Minkalender.se" /></div>
                        <div className="company"><img src="https://www.twire.se/wp-content/uploads/2019/06/micropol.png" alt="Micropol fiberoptics" /></div>
                        <div className="company"><img src="https://www.twire.se/wp-content/uploads/2019/06/Glitteray.png" alt="Glitteray" /></div>
                        <div className="company"><img src="https://www.twire.se/wp-content/uploads/2019/06/appspotr.png" alt="Appspotr" /></div>
                        <div className="company"><img src="https://www.twire.se/wp-content/uploads/2019/06/STORADIO_2_RGB.png" alt="STORADIO.AERO" /></div>
                        <div className="company"><img src="https://www.twire.se/wp-content/uploads/2019/06/esmokes-logo-e1561098728826.png" alt="eSmokes.se" /></div>
                        <div className="company"><img src="https://www.twire.se/wp-content/uploads/2019/06/adme_logo_black.png" alt="ADME.se" /></div>
                        <div className="company"><img src="https://www.twire.se/wp-content/uploads/2019/06/logo-e1561099119307.png" alt="SlideCatcher" /></div>
                        <div className="company"><img src="https://www.twire.se/wp-content/uploads/2019/06/solidcos.png" alt="Solidcos" /></div>
                    </div>
                </div>
                <div className="wp-block-pixudio-instagram instagram-feed-wrapper alignfull">
                    <section className="section padding-bottom in-view in-view--in">
                        <h3 className="text-center">@twire.se</h3>
                        <p className="sub-head in-view__child dashed dashed--vertical in-view__child--in">AT INSTAGRAM</p>
                    </section>
                    <div className="cta-container">
                        <div className="wp-block-pixudio-cta cta cta--primary alignfull">
                            <div className="cta__copy text-center">
                                <h5 className="padding-top">
                                    <span className="cta__subtitle">Got a project</span>
                                </h5>
                                <h2 className="margin-top">
                                    <span className="cta__title">Need our Expertise</span>
                                </h2>
                                <p data-offset="90%" className="padding-top margin-top in-view in-view--in">
                                    <span className="d-inline-block in-view__child in-view__child--scalein in-view__child--in">
                                        <a href="/get-in-touch/" className="btn btn--secondary">
                                            <span className="cta__button">Get in touch today</span>
                                        </a>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;