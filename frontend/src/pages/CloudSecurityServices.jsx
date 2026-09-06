import React from 'react';
import { Link } from 'react-router-dom';

const CloudSecurityServices = () => {

    return (
        <React.Fragment>
            
        {/*  Hero Section  */}
        <section className="solution-hero"
            style={{"backgroundImage":"url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070')"}}>
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="solution-hero-content reveal">
                    <div className="solution-badge">
                        <i className="fa-solid fa-cloud-shield"></i> Advanced Cloud Security
                    </div>
                    <h1 className="solution-hero-title">Cloud Security <br/><span className="text-blue-500">Redefined.</span>
                    </h1>
                    <p className="solution-hero-desc">
                        Protect your digital assets with our world-class cloud infrastructure security. We implement
                        zero-trust architectures and intelligent threat detection to keep your business resilient.
                    </p>
                    <Link to="/contact" className="btn-solution-cta">
                        Start Secure Journey <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </section>

        {/*  Our Solutions Grid  */}
        <section className="solution-grid-section">
            {/*  Ambient Glows  */}
            <div
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none">
            </div>
            <div
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none">
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="solution-grid-header reveal">
                    <h2 className="solution-grid-title">Comprehensive Cloud Solutions</h2>
                    <p className="solution-grid-subtitle">Discover our suite of intelligent services designed to optimize
                        your cloud presence while maintaining absolute security.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/*  Card 1  */}
                    <div className="solution-card reveal">
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-blue-soft">
                            <i className="fa-solid fa-cloud-arrow-up"></i>
                        </div>
                        <h3 className="solution-card-title">Cloud Migration</h3>
                        <p className="solution-card-text">
                            Seamless migration to AWS, Azure, or Google Cloud with minimal downtime, ensuring your data
                            is protected every step of the way.
                        </p>
                    </div>
                    {/*  Card 2  */}
                    <div className="solution-card reveal" style={{"transitionDelay":"100ms"}}>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-teal-soft">
                            <i className="fa-solid fa-chess-knight"></i>
                        </div>
                        <h3 className="solution-card-title">Consulting & Strategy</h3>
                        <p className="solution-card-text">
                            Expert advice and strategic planning to align your cloud initiatives with long-term business
                            goals and ROI.
                        </p>
                    </div>
                    {/*  Card 3  */}
                    <div className="solution-card reveal" style={{"transitionDelay":"200ms"}}>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-sky-soft">
                            <i className="fa-solid fa-gauge-high"></i>
                        </div>
                        <h3 className="solution-card-title">Cloud Management</h3>
                        <p className="solution-card-text">
                            24/7 monitoring, cost-optimization, and proactive technical support for your entire cloud
                            infrastructure.
                        </p>
                    </div>
                    {/*  Card 4  */}
                    <div className="solution-card reveal">
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-purple-soft">
                            <i className="fa-solid fa-shield-halved"></i>
                        </div>
                        <h3 className="solution-card-title">Security Governance</h3>
                        <p className="solution-card-text">
                            Implementing advanced compliance frameworks and automated security policies to protect your
                            cloud perimeter.
                        </p>
                    </div>
                    {/*  Card 5  */}
                    <div className="solution-card reveal" style={{"transitionDelay":"100ms"}}>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-orange-soft">
                            <i className="fa-solid fa-infinity"></i>
                        </div>
                        <h3 className="solution-card-title">DevOps Automation</h3>
                        <p className="solution-card-text">
                            Streamline workflows and accelerate release cycles with our industry-leading CI/CD and
                            infrastructure-as-code expertise.
                        </p>
                    </div>
                    {/*  Card 6  */}
                    <div className="solution-card reveal" style={{"transitionDelay":"200ms"}}>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-pink-soft">
                            <i className="fa-solid fa-chart-pie"></i>
                        </div>
                        <h3 className="solution-card-title">Data Intelligence</h3>
                        <p className="solution-card-text">
                            Unlock actionable insights and make data-driven decisions with our secure, cloud-native
                            analytics solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    
        </React.Fragment>
    );
};

export default CloudSecurityServices;
