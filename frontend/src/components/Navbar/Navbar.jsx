import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => {
        if (path === '/' && location.pathname === '/') return true;
        if (path !== '/' && location.pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <header className="navbar-container" style={{ boxShadow: scrolled ? '0 4px 32px rgba(5,68,148,0.1)' : '0 1px 16px rgba(5,68,148,0.05)' }}>
            <nav className="main-nav">
                {/* Logo */}
                <Link to="/" className="logo-link" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                    <img src={logo} alt="StromeX Logo" className="logo-img" />
                </Link>

                {/* Nav Links */}
                <ul className="nav-links" style={{ margin: 0, padding: 0 }}>
                    <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
                    <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>About Us</Link></li>
                    <li className="nav-item-dropdown">
                        <Link to="/solutions" className={isActive('/solutions') ? 'active' : ''} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            Solutions
                            <i className="fa-solid fa-caret-down" style={{ fontSize: '10px', opacity: 0.7 }}></i>
                        </Link>
                        <ul className="dropdown-menu" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li><Link to="/cloud-security-services" className="dropdown-link"><i className="fas fa-shield-halved" style={{ color: '#02A2F0', width: '16px' }}></i> Cloud Security Services</Link></li>
                            <li><Link to="/infrastructure" className="dropdown-link"><i className="fas fa-server" style={{ color: '#054494', width: '16px' }}></i> IT Infrastructure Solutions</Link></li>
                            <li><Link to="/mdm" className="dropdown-link"><i className="fas fa-mobile-screen-button" style={{ color: '#016FE2', width: '16px' }}></i> Device Deployment & MDM</Link></li>
                            <li><Link to="/network-security" className="dropdown-link"><i className="fas fa-network-wired" style={{ color: '#02A2F0', width: '16px' }}></i> Network Security Solutions</Link></li>
                            <li><Link to="/consultancy" className="dropdown-link"><i className="fas fa-lightbulb" style={{ color: '#FF6E04', width: '16px' }}></i> IT Consultancy & Training</Link></li>
                            <li><Link to="/gifting" className="dropdown-link"><i className="fas fa-gift" style={{ color: '#054494', width: '16px' }}></i> Gifting Solutions</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className={isActive('/contact') ? 'nav-cta-btn active' : 'nav-cta-btn'}
                            style={{ marginLeft: '8px' }}
                        >
                            <i className="fas fa-paper-plane" style={{ fontSize: '12px' }}></i>
                            Contact Us
                        </Link>
                    </li>
                </ul>

                {/* Social Icons */}
                <div className="nav-social hidden md:flex" style={{ display: 'flex', gap: '4px', alignItems: 'center', marginLeft: '12px' }}>
                    
                    <a href="https://www.instagram.com/stromexai/" aria-label="Instagram"><i className="fa-brands fa-instagram" style={{ fontSize: '13px' }}></i></a>
                    <a href="https://in.linkedin.com/in/stromexai-tech-solutions-8861ba364" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" style={{ fontSize: '13px' }}></i></a>
                    
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
