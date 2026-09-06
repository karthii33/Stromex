import React from 'react';
import { Link } from 'react-router-dom';

const Infrastructure = () => {

    return (
        <React.Fragment>
            
        {/*  Hero Section  */}
        <section className="solution-hero"
            style={{"backgroundImage":"url('https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2070')"}}>
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="solution-hero-content reveal">
                    <div className="solution-badge">
                        <i className="fa-solid fa-server"></i> Enterprise Infrastructure
                    </div>
                    <h1 className="solution-hero-title">IT Infrastructure <br/><span className="text-blue-500">Built to
                            Scale.</span></h1>
                    <p className="solution-hero-desc">
                        Deploy robust, secure, and ultra-high-performance IT environments. We provide the architectural
                        backbone for modern enterprises to thrive in a digital-first world.
                    </p>
                    <Link to="/contact" className="btn-solution-cta">
                        Consult Our Architects <i className="fa-solid fa-arrow-right"></i>
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
                    <h2 className="solution-grid-title">Infrastructure Excellence</h2>
                    <p className="solution-grid-subtitle">From silicon to cloud, we manage the complete technology stack
                        ensuring zero downtime and maximum efficiency.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/*  Card 1  */}
                    <div className="solution-card reveal">
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-blue-soft">
                            <i className="fa-solid fa-network-wired"></i>
                        </div>
                        <h3 className="solution-card-title">Network Orchestration</h3>
                        <p className="solution-card-text">
                            Designing and deploying secure, software-defined network architectures tailored to your
                            enterprise's unique connectivity needs.
                        </p>
                    </div>
                    {/*  Card 2  */}
                    <div className="solution-card reveal" style={{"transitionDelay":"100ms"}}>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-teal-soft">
                            <i className="fa-solid fa-database"></i>
                        </div>
                        <h3 className="solution-card-title">Server Virtualization</h3>
                        <p className="solution-card-text">
                            Expert server management and maintenance to ensure peak performance, reliability, and
                            seamless scalability for your apps.
                        </p>
                    </div>
                    {/*  Card 3  */}
                    <div className="solution-card reveal" style={{"transitionDelay":"200ms"}}>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-sky-soft">
                            <i className="fa-solid fa-building-shield"></i>
                        </div>
                        <h3 className="solution-card-title">Data Center Design</h3>
                        <p className="solution-card-text">
                            Modern data center management and disaster recovery planning to ensure absolute business
                            continuity under any conditions.
                        </p>
                    </div>
                    {/*  Card 4  */}
                    <div className="solution-card reveal">
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-purple-soft">
                            <i className="fa-solid fa-user-shield"></i>
                        </div>
                        <h3 className="solution-card-title">Infrastructure Security</h3>
                        <p className="solution-card-text">
                            Multi-layered shielding with advanced threat detection and compliance management at the core
                            of your infrastructure.
                        </p>
                    </div>
                    {/*  Card 5  */}
                    <div className="solution-card reveal" style={{"transitionDelay":"100ms"}}>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-orange-soft">
                            <i className="fa-solid fa-headset"></i>
                        </div>
                        <h3 className="solution-card-title">Managed IT Support</h3>
                        <p className="solution-card-text">
                            24/7 proactive system monitoring and expert helpdesk support to keep your critical business
                            operations running smoothly.
                        </p>
                    </div>
                    {/*  Card 6  */}
                    <div className="solution-card reveal" style={{"transitionDelay":"200ms"}}>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-pink-soft">
                            <i className="fa-solid fa-microchip"></i>
                        </div>
                        <h3 className="solution-card-title">Hardware Orchestration</h3>
                        <p className="solution-card-text">
                            Strategic sourcing and configuration of elite computing power, from server farms to high-end
                            workstation fleets.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    
        </React.Fragment>
    );
};

export default Infrastructure;
