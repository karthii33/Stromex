import React from 'react';
import { Link } from 'react-router-dom';

const Solutions = () => {

    return (
        <React.Fragment>
            
        {/*  Hero Section  */}
        <section className="solution-hero"
            style={{"backgroundImage":"url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000')"}}>
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="solution-hero-content reveal">
                    <div className="solution-badge">
                        <i className="fa-solid fa-layer-group"></i> Our Elite Ecosystem
                    </div>
                    <h1 className="solution-hero-title">Solutions Portfolio <br/><span className="text-blue-500">For the
                            Forward-thinking.</span></h1>
                    <p className="solution-hero-desc">
                        Explore our comprehensive suite of specialized IT services. From securing the cloud to curating
                        premium corporate experiences, we provide the intelligence that powers modern industry.
                    </p>
                    <a href="#portfolio" className="btn-solution-cta">
                        Explore Portfolio <i className="fa-solid fa-chevron-down"></i>
                    </a>
                </div>
            </div>
        </section>

        {/*  Solutions Grid  */}
        <section id="portfolio" className="solution-grid-section">
            {/*  Ambient Glows  */}
            <div
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none">
            </div>
            <div
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none">
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="solution-grid-header reveal">
                    <h2 className="solution-grid-title">Architecting Your Success</h2>
                    <p className="solution-grid-subtitle">Select a specialized track to discover how StromeX can transform
                        your digital infrastructure.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/*  Cloud Security  */}
                    <Link to="/cloud-security-services" className="solution-card reveal group">
                        <div className="card-glow"></div>
                     <div className="solution-card-icon bg-blue-soft">
    <i className="fa-solid fa-cloud"></i>
</div>
                        <h3 className="solution-card-title group-hover:text-blue-600 transition-colors">Cloud Security</h3>
                        <p className="solution-card-text">
                            Secure migrations and intelligent data protection across all major cloud platforms, ensuring
                            your infrastructure is resilient.
                        </p>
                        <div
                            className="mt-auto pt-6 text-blue-500 font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-sm italic">
                            Discover Solution <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
                        </div>
                    </Link>

                    {/*  IT Infrastructure  */}
                    <Link to="/infrastructure" className="solution-card reveal group" style={{"transitionDelay":"100ms"}}>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-teal-soft">
                            <i className="fa-solid fa-network-wired"></i>
                        </div>
                        <h3 className="solution-card-title group-hover:text-teal-600 transition-colors">IT Infrastructure
                        </h3>
                        <p className="solution-card-text">
                            Robust server and software-defined network solutions built for ultra-high-performance and
                            absolute business continuity.
                        </p>
                        <div
                            className="mt-auto pt-6 text-teal-500 font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-sm italic">
                            Discover Solution <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
                        </div>
                    </Link>

                    {/*  Device Management  */}
                    <Link to="/mdm" className="solution-card reveal group" style={{"transitionDelay":"200ms"}}>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-sky-soft">
                            <i className="fa-solid fa-mobile-screen"></i>
                        </div>
                        <h3 className="solution-card-title group-hover:text-sky-600 transition-colors">Device Management
                        </h3>
                        <p className="solution-card-text">
                            Complete control over your corporate fleet with centralized, zero-touch deployment and
                            intelligent lifecycle management.
                        </p>
                        <div
                            className="mt-auto pt-6 text-sky-500 font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-sm italic">
                            Discover Solution <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
                        </div>
                    </Link>

                    {/*  Network Security  */}
                    <Link to="/network-security" className="solution-card reveal group">
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-purple-soft">
                            <i className="fa-solid fa-shield-halved"></i>
                        </div>
                        <h3 className="solution-card-title group-hover:text-purple-600 transition-colors">Network Security
                        </h3>
                        <p className="solution-card-text">
                            Advanced multi-layered defense and proactive AI monitoring to protect your digital assets
                            from sophisticated global threats.
                        </p>
                        <div
                            className="mt-auto pt-6 text-purple-500 font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-sm italic">
                            Discover Solution <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
                        </div>
                    </Link>

                    {/*  IT Consultancy  */}
                    <Link to="/consultancy" className="solution-card reveal group" style={{"transitionDelay":"100ms"}}>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-orange-soft">
                            <i className="fa-solid fa-brain"></i>
                        </div>
                        <h3 className="solution-card-title group-hover:text-orange-600 transition-colors">IT Consultancy
                        </h3>
                        <p className="solution-card-text">
                            Strategic advisory and elite technical training designed to optimize your tech landscape and
                            upskill your future leaders.
                        </p>
                        <div
                            className="mt-auto pt-6 text-orange-500 font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-sm italic">
                            Discover Solution <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
                        </div>
                    </Link>

                    {/*  Gifting Solutions  */}
                    <Link to="/gifting" className="solution-card reveal group" style={{"transitionDelay":"200ms"}}>
                        <div className="card-glow"></div>
                        <div className="solution-card-icon bg-pink-soft">
                            <i className="fa-solid fa-gift"></i>
                        </div>
                        <h3 className="solution-card-title group-hover:text-pink-600 transition-colors">Gifting Solutions
                        </h3>
                        <p className="solution-card-text">
                            Premium tech and luxury lifestyle curations tailored for your elite partners and employees,
                            managed with global precision.
                        </p>
                        <div
                            className="mt-auto pt-6 text-pink-500 font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-sm italic">
                            Discover Solution <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    
        </React.Fragment>
    );
};

export default Solutions;
