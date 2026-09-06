import React from 'react';
import { Link } from 'react-router-dom';

const Consultancy = () => {

    return (
        <React.Fragment>
            
        {/*  Hero Section  */}
        <section className="solution-hero"
            style={{"backgroundImage":"url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070')"}}>
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="solution-hero-content reveal">
                    <div className="solution-badge">
                        <i className="fa-solid fa-brain"></i> Strategic Advisory
                    </div>
                    <h1 className="solution-hero-title">IT Consultancy <br/>& <span className="text-blue-500">Training.</span>
                    </h1>
                    <p className="solution-hero-desc">
                        Empower your leadership and teams with futuristic IT insights. We bridge the gap between complex
                        technology and actionable business growth through expert consultancy and elite training.
                    </p>
                    <Link to="/contact" className="btn-solution-cta">
                        Upskill Your Team <i className="fa-solid fa-arrow-right"></i>
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
                    <h2 className="solution-grid-title">Elite Knowledge Solutions</h2>
                    <p className="solution-grid-subtitle">Transform your human capital into a competitive advantage with our
                        industry-leading specialization tracks.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/*  Card 1  */}
                    <div className="solution-card reveal">
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-blue-soft">
                            <i className="fa-solid fa-compass"></i>
                        </div>
                        <h3 className="solution-card-title">IT Strategy Consulting</h3>
                        <p className="solution-card-text">
                            Aligning your technology roadmap with high-level business goals to drive efficiency,
                            innovation, and sustainable market growth.
                        </p>
                    </div>
                    {/*  Card 2  */}
                    <div className="solution-card reveal" style={{"transitionDelay":"100ms"}}>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-teal-soft">
                            <i className="fa-solid fa-rocket"></i>
                        </div>
                        <h3 className="solution-card-title">Digital Transformation</h3>
                        <p className="solution-card-text">
                            Architecting the transition to modern digital workflows, ensuring your organization leads
                            rather than follows in the tech race.
                        </p>
                    </div>
                    {/*  Card 3  */}
                    <div className="solution-card reveal" style={{"transitionDelay":"200ms"}}>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-sky-soft">
                            <i className="fa-solid fa-user-ninja"></i>
                        </div>
                        <h3 className="solution-card-title">Security Consulting</h3>
                        <p className="solution-card-text">
                            Expert risk assessment and defensive strategy development to ensure your executive team
                            understands the threat landscape.
                        </p>
                    </div>
                    {/*  Card 4  */}
                    <div className="solution-card reveal">
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-purple-soft">
                            <i className="fa-solid fa-graduation-cap"></i>
                        </div>
                        <h3 className="solution-card-title">Corporate Training</h3>
                        <p className="solution-card-text">
                            High-impact, custom-tailored training programs designed to convert your staff into
                            high-bandwidth technical assets.
                        </p>
                    </div>
                    {/*  Card 5  */}
                    <div className="solution-card reveal" style={{"transitionDelay":"100ms"}}>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-orange-soft">
                            <i className="fa-solid fa-certificate"></i>
                        </div>
                        <h3 className="solution-card-title">Certification Bootcamps</h3>
                        <p className="solution-card-text">
                            Intensive, expert-led accelerators designed to help your team secure critical industry
                            credentials in record time.
                        </p>
                    </div>
                    {/*  Card 6  */}
                    <div className="solution-card reveal" style={{"transitionDelay":"200ms"}}>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <span className="particle"></span>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-pink-soft">
                            <i className="fa-solid fa-user-group"></i>
                        </div>
                        <h3 className="solution-card-title">Leadership Coaching</h3>
                        <p className="solution-card-text">
                            Advanced development for IT managers, focusing on the intersection of technical excellence
                            and visionary leadership.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    
        </React.Fragment>
    );
};

export default Consultancy;
