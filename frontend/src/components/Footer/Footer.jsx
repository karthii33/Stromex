import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-container">
                {/* Branding Column */}
                <div>
                    <div className="footer-logo-wrap">
                        <img src={logo} alt="StromeXai Logo" className="footer-logo" />
                    </div>
                    <p className="footer-tagline">
                        Your trusted IT Solutions Provider and Authorized Reseller for Apple, Dell, Lenovo, HP, Cisco, Sophos, Fortinet, and more.
                    </p>
                    <div className="footer-social">
                        <a href="https://www.instagram.com/stromexai/" aria-label="Instagram"><i className="fa-brands fa-instagram" style={{ fontSize: '13px' }} target="_blank"></i></a>
                    <a href="https://in.linkedin.com/in/stromexai-tech-solutions-8861ba364" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" style={{ fontSize: '13px' }}target="_blank"></i></a>
                    </div>
                </div>

                {/* Solutions Column */}
                <div>
                    <h4 className="footer-heading">Solutions</h4>
                    <ul className="footer-links">
                        <li><Link to="/cloud-security-services">Cloud Security Services</Link></li>
                        <li><Link to="/infrastructure">IT Infrastructure</Link></li>
                        <li><Link to="/mdm">Device Deployment & MDM</Link></li>
                        <li><Link to="/network-security">Network Security</Link></li>
                        <li><Link to="/consultancy">IT Consultancy & Training</Link></li>
                        <li><Link to="/gifting">Gifting Solutions</Link></li>
                    </ul>
                </div>

                {/* Company Column */}
                <div>
                    <h4 className="footer-heading">Company</h4>
                    <ul className="footer-links">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/solutions">Our Solutions</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div>
                    <h4 className="footer-heading">Contact</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                            <i className="fas fa-location-dot" style={{ color: '#38BDF8', marginTop: '2px', flexShrink: 0 }}></i>
                            <div>
                                <span style={{ display: 'block', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)', marginBottom: '3px' }}>Operations</span>
                                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', lineHeight: 1.5 }}>Hyderabad, Telangana, India</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                            <i className="fas fa-building" style={{ color: '#38BDF8', marginTop: '2px', flexShrink: 0 }}></i>
                            <div>
                                <span style={{ display: 'block', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)', marginBottom: '3px' }}>Registered</span>
                                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', lineHeight: 1.5 }}>2nd Floor, Sri Harshita Nilayam,<br/>Visakhapatnam, AP – 530048</span>
                            </div>
                        </div>
                        <a href="tel:8978929333" style={{ display: 'flex', gap: '12px', alignItems: 'center', textDecoration: 'none' }}>
                            <i className="fas fa-phone" style={{ color: '#FF6E04', flexShrink: 0 }}></i>
                            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', transition: 'color 0.2s' }}
                                onMouseEnter={e => e.target.style.color='white'}
                                onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.7)'}
                            >+91 89789 29333</span>
                        </a>
                        <a href="mailto:contact@stromexai.com" style={{ display: 'flex', gap: '12px', alignItems: 'center', textDecoration: 'none' }}>
                            <i className="fas fa-envelope" style={{ color: '#FF6E04', flexShrink: 0 }}></i>
                            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', transition: 'color 0.2s' }}
                                onMouseEnter={e => e.target.style.color='white'}
                                onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.7)'}
                            >contact@stromexai.com</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom" style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <span>&copy; {new Date().getFullYear()} StromeXAI Tech Solutions. All Rights Reserved.</span>
            </div>

            {/* WhatsApp Float */}
            <a href="https://wa.me/918978929333" className="whatsapp-float" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
            </a>
        </footer>
    );
};

export default Footer;
