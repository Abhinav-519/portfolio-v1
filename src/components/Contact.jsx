import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';
import { personalInfo } from '../data/resume';
import './Contact.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] },
    }),
};

const contactLinks = [
    {
        icon: FiMail,
        label: 'Email',
        value: personalInfo.email,
        href: `mailto:${personalInfo.email}`,
    },
    {
        icon: FiPhone,
        label: 'Phone',
        value: personalInfo.phone,
        href: `tel:${personalInfo.phone}`,
    },
    {
        icon: FiMapPin,
        label: 'Location',
        value: personalInfo.location,
        href: null,
    },
    {
        icon: FiLinkedin,
        label: 'LinkedIn',
        value: 'Connect with me',
        href: personalInfo.linkedin,
    },
    {
        icon: FiGithub,
        label: 'GitHub',
        value: 'View my repos',
        href: personalInfo.github,
    },
];

export default function Contact() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="contact" className="section contact-section" ref={ref}>
            <div className="container">
                <motion.span
                    className="section-label"
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                    custom={0}
                >
                    Contact
                </motion.span>
                <motion.h2
                    className="section-title"
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                    custom={1}
                >
                    Let's <span className="gradient-text">connect</span>
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                    custom={2}
                >
                    Got an exciting project or opportunity? I'd love to hear about it.
                </motion.p>

                <div className="contact__grid">
                    <motion.div
                        className="contact__info"
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={fadeUp}
                        custom={3}
                    >
                        {contactLinks.map((link, i) => {
                            const Icon = link.icon;
                            const Tag = link.href ? 'a' : 'div';
                            return (
                                <motion.div
                                    key={link.label}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    variants={fadeUp}
                                    custom={3 + i}
                                >
                                    <Tag
                                        className="glass-card contact__link"
                                        href={link.href || undefined}
                                        target={link.href?.startsWith('http') ? '_blank' : undefined}
                                        rel={link.href?.startsWith('http') ? 'noreferrer' : undefined}
                                    >
                                        <div className="contact__link-icon">
                                            <Icon />
                                        </div>
                                        <div>
                                            <p className="contact__link-label">{link.label}</p>
                                            <p className="contact__link-value">{link.value}</p>
                                        </div>
                                    </Tag>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    <motion.div
                        className="contact__cta"
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={fadeUp}
                        custom={8}
                    >
                        <div className="glass-card contact__cta-card">
                            <div className="contact__cta-emoji">🚀</div>
                            <h3 className="contact__cta-title">
                                Ready to build something amazing?
                            </h3>
                            <p className="contact__cta-text">
                                Whether it's an AI-powered platform, a full-stack application, or a creative experiment,  I'm always excited to collaborate on meaningful projects.
                            </p>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="btn btn-primary contact__cta-btn"
                            >
                                <FiSend /> Send me an email
                            </a>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
