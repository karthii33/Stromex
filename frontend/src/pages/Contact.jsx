import { useRef } from 'react';
import './Contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();

        const formData = {
            name: form.current.user_name.value,
            email: form.current.user_email.value,
            phone: form.current.phone.value,
            subject: form.current.subject.value,
            message: form.current.message.value
        };

        try {
            const response = await fetch('http://localhost:5000/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            
            if (response.ok) {
                alert("✅ Message sent successfully! Our team will review it in the CRM.");
                form.current.reset();
            } else {
                alert("❌ " + (data.error || "Failed to send message"));
            }
        } catch (error) {
            console.error(error);
            alert("❌ Network error. Please try again.");
        }
    };
    return (
        <div className="contact-page">
            
    

    <main className="relative">
        {/*  Hero Section  */}
        <section className="contact-hero text-white pt-32 pb-48 px-6 lg:px-8 text-center border-b border-slate-800">
            {/*  Decorative Glow  */}
            <div className="hero-glow bg-blue-600 w-96 h-96 top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="hero-glow bg-indigo-500 w-96 h-96 bottom-0 right-0 translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-3xl mx-auto relative z-10 reveal">
                <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                    Connect With StromeX
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white">
                    Let’s Build the Future <br />
                    <span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Together.</span>
                </h1>
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                    Have a complex challenge? Our team of AI specialists and IT architects is ready to design your exact
                    solution.
                </p>
            </div>
        </section>

        {/*  Content Section (Overlaps the Hero)  */}
        <section className="px-6 pb-24 lg:px-8 relative z-20 -mt-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/*  Form Column  */}
                    <div className="lg:col-span-7">
                        <div
                            className="bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-12 reveal">
                            <div className="mb-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Send us a Message</h2>
                                <p className="text-slate-500 text-sm md:text-base">Fill out the form below and our technical
                                    team will get back to you within 24 hours.</p>
                            </div>

                            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                                        <input type="text" name="user_name" className="modern-input" placeholder="e.g. John Doe" required/>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Business
                                            Email</label>
                                        <input type="email" name="user_email" className="modern-input" placeholder="john@company.com"
                                            required/>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        Phone Number
                                    </label>

                                    <input
                                        type="tel"
                                        name="phone"
                                        className="modern-input"
                                        placeholder="+91 9876543210"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                                    <input type="text" name="subject" className="modern-input" placeholder="How can we help?" required/>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Project
                                        Details</label>
                                    <textarea rows="4" name="message" className="modern-input resize-none"
                                        placeholder="Tell us about your project requirements, timeline, and goals..."
                                        required></textarea>
                                </div>

                                <button type="submit"
                                    className="w-full bg-slate-900 hover:bg-blue-600 text-white font-semibold text-lg py-4 rounded-xl transition-all duration-300 shadow-lg shadow-slate-900/20 hover:shadow-blue-600/30 flex justify-center items-center gap-3 mt-4">
                                    <span>Transmit Message</span>
                                    <i
                                        className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/*  Details Column  */}
                    <div className="lg:col-span-5 pt-4 lg:pt-12">
                        <div className="reveal" style={{"transitionDelay":"200ms"}}>
                            <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-8">Direct
                                Connectivity</h3>

                            <div className="space-y-4">
                                {/*  Locations  */}
                                <div className="space-y-4">
                                    <div
                                        className="info-card p-5 rounded-2xl border border-transparent flex gap-5 items-start">
                                        <div
                                            className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 shrink-0 text-lg">
                                            <i className="fas fa-location-dot"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">
                                                Operational Address</h4>
                                            <p className="text-slate-500 text-sm leading-relaxed">Hyderabad, Telangana,
                                                India.</p>
                                        </div>
                                    </div>

                                    <div
                                        className="info-card p-5 rounded-2xl border border-transparent flex gap-5 items-start">
                                        <div
                                            className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 shrink-0 text-lg">
                                            <i className="fas fa-building"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">
                                                Registered Office</h4>
                                            <p className="text-slate-500 text-sm leading-relaxed">
                                                2nd floor, Sri Harshita Nylayam, <br/>
                                                Visakhapatnam, AP – 530048
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/*  Phone  */}
                                <a href="tel:+918978929333"
                                    className="info-card p-5 rounded-2xl border border-transparent flex gap-5 items-start block group">
                                    <div
                                        className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 shrink-0 text-lg group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
                                        <i className="fas fa-phone-volume"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 text-base mb-1">Sales & Support</h4>
                                        <p className="text-blue-600 font-medium">+91 89789 29333</p>
                                        <p className="text-slate-400 text-xs mt-1">Mon - Sat | 9:00 AM - 6:00 PM (IST)</p>
                                    </div>
                                </a>

                                {/*  Email  */}
                                <a href="mailto:contact@stromexai.com"
                                    className="info-card p-5 rounded-2xl border border-transparent flex gap-5 items-start block group">
                                    <div
                                        className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 shrink-0 text-lg group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 text-base mb-1">Email Inquiry</h4>
                                        <p className="text-blue-600 font-medium">contact@stromexai.com</p>
                                        <p className="text-slate-400 text-xs mt-1">Typical reply time: 24 hours</p>
                                    </div>
                                </a>
                            </div>

                            {/*  Social Connection  */}
                            <div className="mt-12 pt-8 border-t border-slate-200">
                                <h4 className="text-sm font-semibold text-slate-900 mb-4">Join our network</h4>
                                <div className="flex gap-3">
                                    <a href="#"
                                        className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </a>
                                    <a href="#"
                                        className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300">
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </a>
                                    <a href="#"
                                        className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all duration-300">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/*  Map Section  */}
        <section className="h-[500px] w-full relative premium-map bg-slate-200">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.7412727821614!2d83.3444855!3d17.813083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0000000001%3A0x0!2sMadhurawada%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%" height="100%" style={{"border":"0"}} allowFullScreen="" loading="lazy" aria-hidden="false"
                tabIndex="0">
            </iframe>
        </section>
    </main>

    

    
    

        </div>
    );
};

export default Contact;
