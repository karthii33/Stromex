import React from 'react';
import { Link } from 'react-router-dom';

const NetworkSecurity = () => {

    return (
        <React.Fragment>
            
        {/*  Hero Section  */}
        <section className="solution-hero"
            style={{"backgroundImage":"url('https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2070')"}}>
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="solution-hero-content reveal">
                    <div className="solution-badge">
                        <i className="fa-solid fa-shield-virus"></i> Elite Network Protection
                    </div>
                    <h1 className="solution-hero-title">Network Security <br/><span
                            className="text-blue-500">Unpenetrable.</span></h1>
                    <p className="solution-hero-desc">
                        Defend your perimeter with multi-layered intelligence. We implement next-gen firewalls and
                        real-time monitoring to ensure your network remains a fortress against global cyber threats.
                    </p>
                    <Link to="/contact" className="btn-solution-cta">
                        Secure Your Network <i className="fa-solid fa-arrow-right"></i>
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
                    <h2 className="solution-grid-title">Multi-Layered Defense</h2>
                    <p className="solution-grid-subtitle">Proactive protection and compliance monitoring designed for the
                        modern interconnected enterprise.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/*  Card 1  */}
                    <div className="solution-card reveal">
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-blue-soft">
                            <i className="fa-solid fa-shield-halved"></i>
                        </div>
                        <h3 className="solution-card-title">Firewall Mastery</h3>
                        <p className="solution-card-text">
                            Deploying next-generation firewalls with deep packet inspection to control refined traffic
                            and neutralize malicious actors.
                        </p>
                    </div>
                    {/*  Card 2  */}
                    <div className="solution-card reveal" style={{"transitionDelay":"100ms"}}>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-teal-soft">
                            <i className="fa-solid fa-eye"></i>
                        </div>
                        <h3 className="solution-card-title">Intrusion Prevention</h3>
                        <p className="solution-card-text">
                            24/7 AI-driven network monitoring to detect, isolate, and respond to unauthorized access and
                            complex lateral movements.
                        </p>
                    </div>
                    {/*  Card 3  */}
                    <div className="solution-card reveal" style={{"transitionDelay":"200ms"}}>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-sky-soft">
                            <i className="fa-solid fa-vault"></i>
                        </div>
                        <h3 className="solution-card-title">VPN & Secure Edge</h3>
                        <p className="solution-card-text">
                            Implementing encrypted tunneling and secure edge solutions to provide safe, high-speed
                            access for your distributed workforce.
                        </p>
                    </div>
                    {/*  Card 4  */}
                    <div className="solution-card reveal">
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-purple-soft">
                            <i className="fa-solid fa-laptop-medical"></i>
                        </div>
                        <h3 className="solution-card-title">Endpoint Armoring</h3>
                        <p className="solution-card-text">
                            Protecting every node—from cloud servers to executive laptops—with heuristic malware
                            analysis and EDR protection.
                        </p>
                    </div>
                    {/*  Card 5  */}
                    <div className="solution-card reveal" style={{"transitionDelay":"100ms"}}>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-orange-soft">
                            <i className="fa-solid fa-clipboard-check"></i>
                        </div>
                        <h3 className="solution-card-title">Security Audits</h3>
                        <p className="solution-card-text">
                            Deep-dive vulnerability assessments ensuring your network adheres to global standards like
                            ISO 27001, GDPR, and HIPAA.
                        </p>
                    </div>
                    {/*  Card 6  */}
                    <div className="solution-card reveal" style={{"transitionDelay":"200ms"}}>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-pink-soft">
                            <i className="fa-solid fa-fire-extinguisher"></i>
                        </div>
                        <h3 className="solution-card-title">Rapid Incident Response</h3>
                        <p className="solution-card-text">
                            Executing precision response plans to contain breaches, mitigate impact, and restore secure
                            operations within minutes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    
        </React.Fragment>
    );
};

export default NetworkSecurity;
