import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './Navbar.css';

const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = navLinks.map(l => document.getElementById(l.id));
            const current = sections.reduce((acc, section) => {
                if (!section) return acc;
                const rect = section.getBoundingClientRect();
                if (rect.top <= 200) return section.id;
                return acc;
            }, 'hero');
            setActiveSection(current);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
    };

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
            <div className="navbar__inner">
                <motion.button
                    className="navbar__logo"
                    onClick={() => scrollTo('hero')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="navbar__logo-bracket">{'<'}</span>
                    KAB
                    <span className="navbar__logo-bracket">{' />'}</span>
                </motion.button>

                <div className="navbar__links">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
                            onClick={() => scrollTo(link.id)}
                        >
                            {link.label}
                            {activeSection === link.id && (
                                <motion.div
                                    className="navbar__link-indicator"
                                    layoutId="activeIndicator"
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                <button
                    className="navbar__mobile-toggle"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="navbar__mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navLinks.map((link, i) => (
                            <motion.button
                                key={link.id}
                                className={`navbar__mobile-link ${activeSection === link.id ? 'navbar__mobile-link--active' : ''}`}
                                onClick={() => scrollTo(link.id)}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                            >
                                {link.label}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
