import React from 'react';
import { Link } from 'react-router-dom';

const Gifting = () => {

    return (
        <React.Fragment>
            
        {/*  Hero Section  */}
        <section className="solution-hero"
            style={{"backgroundImage":"url('https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2070')"}}>
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="solution-hero-content reveal">
                    <div className="solution-badge">
                        <i className="fa-solid fa-gift"></i> Premium Brand Gifting
                    </div>
                    <h1 className="solution-hero-title">Corporate Gifting <br/><span className="text-blue-500">Excellence.</span>
                    </h1>
                    <p className="solution-hero-desc">
                        Elevate your corporate relationships with bespoke premium gifts. We curate high-end tech and
                        luxury lifestyle products that leave a lasting impression on your elite partners and teams.
                    </p>
                    <Link to="/contact" className="btn-solution-cta">
                        Curate Your Gifts <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </section>

        {/*  Our Solutions Grid  */}
        <section className="solution-grid-section">
            <div
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none">
            </div>
            <div
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none">
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="solution-grid-header reveal">
                    <h2 className="solution-grid-title">Bespoke Gifting Services</h2>
                    <p className="solution-grid-subtitle">Discover a world of thoughtful, high-end branding and global
                        logistics designed for corporate distinction.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/*  Card 1  */}
                    <div className="solution-card reveal">
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-blue-soft">
                            <i className="fa-solid fa-wand-magic-sparkles"></i>
                        </div>
                        <h3 className="solution-card-title">Tech Curations</h3>
                        <p className="solution-card-text">
                            Hand-picked premium gadgets and exclusive tech accessories from global brands, perfectly
                            tailored for your high-value audience.
                        </p>
                    </div>
                    {/*  Card 2  */}
                    <div className="solution-card reveal" style={{"transitionDelay":"100ms"}}>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-teal-soft">
                            <i className="fa-solid fa-gem"></i>
                        </div>
                        <h3 className="solution-card-title">Elite Branding</h3>
                        <p className="solution-card-text">
                            Precision logo engraving and personalized ultra-premium packaging that transforms a simple
                            gift into a brand statement.
                        </p>
                    </div>
                    {/*  Card 3  */}
                    <div className="solution-card reveal" style={{"transitionDelay":"200ms"}}>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-sky-soft">
                            <i className="fa-solid fa-award"></i>
                        </div>
                        <h3 className="solution-card-title">Talent Appreciation</h3>
                        <p className="solution-card-text">
                            Celebrate corporate milestones and record-breaking performance with curated boxes that truly
                            honor your team's dedication.
                        </p>
                    </div>
                    {/*  Card 4  */}
                    <div className="solution-card reveal">
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-purple-soft">
                            <i className="fa-solid fa-calendar-check"></i>
                        </div>
                        <h3 className="solution-card-title">Seasonal Campaigns</h3>
                        <p className="solution-card-text">
                            Turnkey holiday and event gifting programs, managing everything from global selection to
                            synchronized worldwide fulfillment.
                        </p>
                    </div>
                    {/*  Card 5  */}
                    <div className="solution-card reveal" style={{"transitionDelay":"100ms"}}>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-orange-soft">
                            <i className="fa-solid fa-leaf"></i>
                        </div>
                        <h3 className="solution-card-title">Eco-Luxury Options</h3>
                        <p className="solution-card-text">
                            Sustainable, ethically sourced gift choices that align your brand with modern corporate
                            responsibility and green values.
                        </p>
                    </div>
                    {/*  Card 6  */}
                    <div className="solution-card reveal" style={{"transitionDelay":"200ms"}}>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-pink-soft">
                            <i className="fa-solid fa-plane-up"></i>
                        </div>
                        <h3 className="solution-card-title">Global Logistics</h3>
                        <p className="solution-card-text">
                            White-glove delivery and doorstep management for large-scale international gifting, ensuring
                            your brand travels everywhere.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    
        </React.Fragment>
    );
};

export default Gifting;
