import React from 'react';
import { Link } from 'react-router-dom';

const MDM = () => {

    return (
        <React.Fragment>
            
        {/*  Hero Section  */}
        <section className="solution-hero"
            style={{"backgroundImage":"url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070')"}}>
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="solution-hero-content reveal">
                    <div className="solution-badge">
                        <i className="fa-solid fa-mobile-screen-button"></i> Smart Device Management
                    </div>
                    <h1 className="solution-hero-title">MDM & Deployment <br/><span className="text-blue-500">Unleashed.</span>
                    </h1>
                    <p className="solution-hero-desc">
                        Streamline your mobile workforce with automated deployment and central management. We ensure
                        every device in your fleet is secure, configured, and ready to perform.
                    </p>
                    <Link to="/contact" className="btn-solution-cta">
                        Deploy Your Fleet <i className="fa-solid fa-arrow-right"></i>
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
                    <h2 className="solution-grid-title">Elite Device Solutions</h2>
                    <p className="solution-grid-subtitle">Manage the complete device lifecycle from procurement to secure
                        retirement with our intelligent MDM framework.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/*  Card 1  */}
                    <div className="solution-card reveal">
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-blue-soft">
                            <i className="fa-solid fa-bolt"></i>
                        </div>
                        <h3 className="solution-card-title">Zero-Touch Setup</h3>
                        <p className="solution-card-text">
                            Automated, out-of-the-box enrollment and configuration, delivering a "ready-to-work"
                            experience for your global workforce.
                        </p>
                    </div>
                    {/*  Card 2  */}
                    <div className="solution-card reveal" style={{"transitionDelay":"100ms"}}>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-teal-soft">
                            <i className="fa-solid fa-laptop-code"></i>
                        </div>
                        <h3 className="solution-card-title">Centralized MDM</h3>
                        <p className="solution-card-text">
                            Unified policy enforcement across all corporate-owned devices, from high-end laptops to
                            frontline mobile units.
                        </p>
                    </div>
                    {/*  Card 3  */}
                    <div className="solution-card reveal" style={{"transitionDelay":"200ms"}}>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-sky-soft">
                            <i className="fa-solid fa-cubes"></i>
                        </div>
                        <h3 className="solution-card-title">App Provisioning</h3>
                        <p className="solution-card-text">
                            Securely deploy and manage corporate applications, ensuring every user has the exact tools
                            they need to stay productive.
                        </p>
                    </div>
                    {/*  Card 4  */}
                    <div className="solution-card reveal">
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-purple-soft">
                            <i className="fa-solid fa-fingerprint"></i>
                        </div>
                        <h3 className="solution-card-title">Security Compliance</h3>
                        <h4 className="solution-card-title">Compliance</h4>
                        <p className="solution-card-text">
                            Enforce encryption, biometric passcodes, and remote-wipe capabilities to protect sensitive
                            corporate data at all times.
                        </p>
                    </div>
                    {/*  Card 5  */}
                    <div className="solution-card reveal" style={{"transitionDelay":"100ms"}}>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-orange-soft">
                            <i className="fa-solid fa-boxes-stacked"></i>
                        </div>
                        <h3 className="solution-card-title">Asset Inventory</h3>
                        <p className="solution-card-text">
                            Maintain a real-time, global inventory of all managed hardware, software licenses, and
                            assigned user roles.
                        </p>
                    </div>
                    {/*  Card 6  */}
                    <div className="solution-card reveal" style={{"transitionDelay":"200ms"}}>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-pink-soft">
                            <i className="fa-solid fa-recycle"></i>
                        </div>
                        <h3 className="solution-card-title">Lifecycle Support</h3>
                        <p className="solution-card-text">
                            End-to-end management spanning hardware procurement, white-glove repair, and secure, audited
                            retirement.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    
        </React.Fragment>
    );
};

export default MDM;
