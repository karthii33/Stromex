import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    useEffect(() => {
        // Stat Counter Animation specific to About page
        const stats = document.querySelectorAll('.about-page .stat-number');
        const statObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const stat = entry.target;
                    if (!stat.dataset.counted) {
                        const target = parseInt(stat.getAttribute('data-target'));
                        let count = 0;
                        const duration = 2000;
                        const increment = target / (duration / 16);

                        const updateCount = () => {
                            count += increment;
                            if (count < target) {
                                stat.innerText = Math.round(count);
                                requestAnimationFrame(updateCount);
                            } else {
                                stat.innerText = target;
                            }
                        };
                        updateCount();
                        stat.dataset.counted = 'true';
                    }
                    statObserver.unobserve(stat);
                }
            });
        }, { threshold: 0.5 });

        stats.forEach(stat => statObserver.observe(stat));
        
        return () => {
            stats.forEach(stat => statObserver.unobserve(stat));
        };
    }, []);

    return (
        <div className="about-page">
            
    {/*  Header Placeholder  */}
    

    <main className="relative">

        {/*  Ambient Background Glows  */}
        <div className="ambient-glow bg-blue-500 w-[500px] h-[500px] top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="ambient-glow bg-indigo-400 w-[400px] h-[400px] top-[20%] right-0 translate-x-1/3"></div>

        {/*  Hero Section  */}
        <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-20">

                    {/*  Text Content  */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left reveal">
                        <div
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-blue-600 text-xs font-bold tracking-widest uppercase mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                            The Vanguard of IT Excellence
                        </div>

                        <h1
                            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 mb-4 tracking-tight leading-[1.05]">
                            Pioneering the <br/><span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital
                                Frontier</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl font-medium text-slate-500 mb-8 leading-relaxed">
                            Crafting intelligent, secure, and future-proof infrastructures for the world's most
                            ambitious companies.
                        </h2>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                            <div
                                className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-slate-700 font-medium text-sm">
                                <i className="fa-solid fa-check-circle text-blue-600"></i> AI-Integrated
                            </div>
                            <div
                                className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-slate-700 font-medium text-sm">
                                <i className="fa-solid fa-check-circle text-blue-600"></i> Cloud-First
                            </div>
                            <div
                                className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-slate-700 font-medium text-sm">
                                <i className="fa-solid fa-check-circle text-blue-600"></i> Security-Centric
                            </div>
                        </div>

                        {/*  Stats  */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            <div
                                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-transform hover:-translate-y-1 duration-300">
                                <div className="text-3xl font-black text-slate-900 mb-1"><span className="stat-number"
                                        data-target="250">0</span><span className="text-blue-600">+</span></div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global
                                    Clients</div>
                            </div>
                            <div
                                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-transform hover:-translate-y-1 duration-300 text-center lg:text-left">
                                <div className="text-3xl font-black text-slate-900 mb-1"><span className="stat-number"
                                        data-target="15">0</span><span className="text-indigo-600">+</span></div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Years
                                    Expertise</div>
                            </div>
                            <div
                                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-transform hover:-translate-y-1 duration-300 text-center lg:text-left hidden sm:block">
                                <div className="text-3xl font-black text-slate-900 mb-1"><span className="stat-number"
                                        data-target="99">0</span><span className="text-emerald-500">%</span></div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Uptime
                                    Record</div>
                            </div>
                        </div>
                    </div>

                    {/*  Image Content  */}
                    <div className="w-full lg:w-1/2 reveal" style={{"transitionDelay":"200ms"}}>
                        <div
                            className="relative rounded-3xl p-3 bg-white border border-slate-200 shadow-2xl overflow-hidden group">
                            <div
                                className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-indigo-600/5 z-10 group-hover:opacity-0 transition-opacity duration-500">
                            </div>
                            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000"
                                alt="Modern Workplace"
                                className="rounded-2xl object-cover w-full h-[450px] lg:h-[600px] transition-transform duration-700 group-hover:scale-110"/>

                            {/*  Floating Badge  */}
                            <div
                                className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-slate-200 shadow-xl z-20 max-w-[200px]">
                                <div className="flex items-center gap-3 mb-2">
                                    <div
                                        className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white text-lg">
                                        <i className="fa-solid fa-shield-halved"></i>
                                    </div>
                                    <span className="font-bold text-slate-900">Elite Security</span>
                                </div>
                                <p className="text-[11px] text-slate-500 font-medium">Ranked #1 for enterprise-grade
                                    infrastructure protection.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/*  Vision & Mission section rewritten for more impact  */}
        <section className="py-32 bg-white relative z-10 overflow-hidden">
            <div
                className="ambient-glow bg-blue-100 w-[600px] h-[600px] bottom-0 left-0 -translate-x-1/2 translate-y-1/2 opacity-30">
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="w-full lg:w-1/2 reveal">
                        <h2 className="text-4xl font-bold text-slate-900 mb-8">Our Driving Force</h2>
                        <div className="space-y-10">
                            <div className="flex gap-6 group">
                                <div
                                    className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl shrink-0 border border-blue-100/50 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                    <i className="fa-solid fa-eye"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
                                    <p className="text-slate-500 leading-relaxed text-lg">
                                        To be a global leader in intelligent technology, pioneering innovations that
                                        create a secure, efficient, and interconnected future for businesses everywhere.
                                        We envision a world where technology is a seamless extension of human potential.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6 group">
                                <div
                                    className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl shrink-0 border border-indigo-100/50 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                                    <i className="fa-solid fa-rocket"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
                                    <p className="text-slate-500 leading-relaxed text-lg">
                                        To empower clients by delivering tailored, state-of-the-art IT infrastructure
                                        and smart technology services, ensuring robust security and tangible competitive
                                        advantage. Our mission is to simplify complexity and drive measurable growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 reveal" style={{"transitionDelay":"200ms"}}>
                        <div className="grid grid-cols-2 gap-6">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000"
                                alt="Team Collaboration" className="rounded-[2rem] h-80 w-full object-cover shadow-lg"/>
                            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000"
                                alt="Innovation Lab"
                                className="rounded-[2rem] h-80 w-full object-cover shadow-lg translate-y-12"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/*  Core Values Section  */}
        <section className="py-32 bg-slate-50 relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-20 reveal">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Core Values</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">The principles that guide our every decision and
                        interaction, defining the StromeX culture.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div
                        className="bg-white p-10 rounded-[2.5rem] border border-slate-200/50 shadow-sm hover:shadow-xl transition-all duration-500 reveal">
                        <div
                            className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-8 border border-blue-100/50">
                            <i className="fa-solid fa-award"></i>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Excellence</h3>
                        <p className="text-slate-500 font-medium">We strive for nothing less than perfection in every bridge
                            we build and every solution we deploy.</p>
                    </div>
                    <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200/50 shadow-sm hover:shadow-xl transition-all duration-500 reveal"
                        style={{"transitionDelay":"100ms"}}>
                        <div
                            className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl mb-8 border border-indigo-100/50">
                            <i className="fa-solid fa-lightbulb"></i>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Innovation</h3>
                        <p className="text-slate-500 font-medium">Pushing boundaries is in our DNA. We don't just use AI; we
                            pioneer how AI transforms business.</p>
                    </div>
                    <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200/50 shadow-sm hover:shadow-xl transition-all duration-500 reveal"
                        style={{"transitionDelay":"200ms"}}>
                        <div
                            className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl mb-8 border border-emerald-100/50">
                            <i className="fa-solid fa-handshake"></i>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Integrity</h3>
                        <p className="text-slate-500 font-medium">Transparency and trust are the cornerstones of our
                            relationships with clients and partners.</p>
                    </div>
                    <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200/50 shadow-sm hover:shadow-xl transition-all duration-500 reveal"
                        style={{"transitionDelay":"300ms"}}>
                        <div
                            className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center text-2xl mb-8 border border-amber-100/50">
                            <i className="fa-solid fa-bolt-lightning"></i>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Agility</h3>
                        <p className="text-slate-500 font-medium">In a fast-paced digital world, we adapt rapidly to new
                            challenges, ensuring you stay ahead.</p>
                    </div>
                </div>
            </div>
        </section>

        {/*  Our Journey (Timeline)  */}
        <section className="py-32 bg-white relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-24 reveal">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Our Journey</h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/*  Timeline Line  */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2 hidden md:block">
                    </div>

                    {/*  Timeline Items  */}
                    <div className="space-y-24">
                        <div className="relative flex flex-col md:flex-row items-center gap-10 reveal">
                            <div className="w-full md:w-1/2 text-center md:text-right">
                                <span
                                    className="inline-block px-4 py-1 rounded-full bg-blue-600 text-white text-sm font-bold mb-4">2010</span>
                                <h4 className="text-2xl font-bold text-slate-900 mb-2">The Foundation</h4>
                                <p className="text-slate-500 font-medium italic">Founded with a vision to revolutionize IT
                                    infrastructure.</p>
                            </div>
                            <div
                                className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-white border-4 border-blue-600 rounded-full z-10 hidden md:block">
                            </div>
                            <div className="w-full md:w-1/2"></div>
                        </div>

                        <div className="relative flex flex-col md:flex-row-reverse items-center gap-10 reveal"
                            style={{"transitionDelay":"100ms"}}>
                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <span
                                    className="inline-block px-4 py-1 rounded-full bg-indigo-600 text-white text-sm font-bold mb-4">2015</span>
                                <h4 className="text-2xl font-bold text-slate-900 mb-2">Expanding Horizons</h4>
                                <p className="text-slate-500 font-medium italic">Reached 100+ global clients and expanded
                                    into specialized Cloud security.</p>
                            </div>
                            <div
                                className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-white border-4 border-indigo-600 rounded-full z-10 hidden md:block">
                            </div>
                            <div className="w-full md:w-1/2"></div>
                        </div>

                        <div className="relative flex flex-col md:flex-row items-center gap-10 reveal"
                            style={{"transitionDelay":"200ms"}}>
                            <div className="w-full md:w-1/2 text-center md:text-right">
                                <span
                                    className="inline-block px-4 py-1 rounded-full bg-blue-600 text-white text-sm font-bold mb-4">2020</span>
                                <h4 className="text-2xl font-bold text-slate-900 mb-2">AI Integration</h4>
                                <p className="text-slate-500 font-medium italic">Pioneered AI-driven security automation for
                                    large-scale enterprise partners.</p>
                            </div>
                            <div
                                className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-white border-4 border-blue-600 rounded-full z-10 hidden md:block">
                            </div>
                            <div className="w-full md:w-1/2"></div>
                        </div>

                        <div className="relative flex flex-col md:flex-row-reverse items-center gap-10 reveal"
                            style={{"transitionDelay":"300ms"}}>
                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <span
                                    className="inline-block px-4 py-1 rounded-full bg-indigo-600 text-white text-sm font-bold mb-4">2024</span>
                                <h4 className="text-2xl font-bold text-slate-900 mb-2">The Vanguard</h4>
                                <p className="text-slate-500 font-medium italic">Recognized as a Premier Tier-1 provider for
                                    IT & AI-Driven elite solutions.</p>
                            </div>
                            <div
                                className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-white border-4 border-indigo-600 rounded-full z-10 hidden md:block">
                            </div>
                            <div className="w-full md:w-1/2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/*  Location Section  */}
        <section className="py-32 bg-slate-50 relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div
                    className="bg-white rounded-[3rem] border border-slate-200/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden reveal">
                    <div className="flex flex-col lg:flex-row">

                        {/*  Location Info  */}
                        <div
                            className="w-full lg:w-5/12 p-12 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-100">
                            <div
                                className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest rounded-md mb-8 w-max">
                                Global Headquarters
                            </div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">Where Innovation Lives</h2>
                            <p className="text-slate-500 leading-relaxed mb-12 text-lg">
                                Strategically located at the core of the tech ecosystem, our headquarters is the
                                breeding ground for the next generation of IT solutions.
                            </p>

                            <div className="space-y-10">
                                <div className="flex gap-6 items-start group">
                                    <div
                                        className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 text-xl border border-blue-100/50 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2 text-lg">Operational Address</h4>
                                        <p className="text-slate-500 font-medium leading-relaxed">Hyderabad, Telangana,
                                            India.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start group">
                                    <div
                                        className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 text-xl border border-indigo-100/50 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                                        <i className="fa-solid fa-building"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2 text-lg">Registered Address</h4>
                                        <p className="text-slate-500 font-medium leading-relaxed">
                                            2nd floor, Sri Harshita Nylayam<br/>
                                            Visakhapatnam, Andhra Pradesh - 530048.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start group">
                                    <div
                                        className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0 text-xl border border-emerald-100/50 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                                        <i className="fa-solid fa-clock"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2 text-lg">Operational Hours</h4>
                                        <p className="text-slate-500 font-medium">Mon - Sat | 9:00 AM - 6:00 PM IST</p>
                                        <p className="text-emerald-600 text-xs font-bold mt-1">Status: Open Now</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Map Container  */}
                        <div className="w-full lg:w-7/12 min-h-[500px] lg:min-h-full bg-slate-200 premium-map relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15194.276410141682!2d83.3364966!3d17.8115622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3959955778841d%3A0xc3f92d40d99042b!2sMadhurawada%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1715851234567!5m2!1sen!2sin"
                                width="100%" height="100%" className="absolute inset-0" style={{"border":"0"}} allowFullScreen=""
                                loading="lazy"></iframe>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        {/*  CTAs  */}
        <section className="py-24 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden reveal">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full">
                    </div>
                    <div
                        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[100px] rounded-full">
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Ready to Elevate Your
                            <br/>Digital Infrastructure?
                        </h2>
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                            Join the elite circle of businesses leveraging StromeX for unparalleled security and growth.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link to="/contact"
                                className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 hover:-translate-y-1">
                                Start Your Journey
                            </Link>
                            <Link to="/solutions"
                                className="px-10 py-5 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition-all backdrop-blur-md border border-white/10 hover:-translate-y-1">
                                Explore Our Elite Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>

    {/*  Footer Placeholder  */}
    


    
    

        </div>
    );
};

export default About;
