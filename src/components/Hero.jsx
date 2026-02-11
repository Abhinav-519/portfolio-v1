import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/resume';
import './Hero.css';

const roles = [
    "GenAI Engineer",
    "Full Stack Developer",
    "AI Automation Engineer",
    "AI Innovator",
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = roles[roleIndex];
        let timeout;

        if (!isDeleting && displayed === current) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayed === '') {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
            const speed = isDeleting ? 40 : 80;
            timeout = setTimeout(() => {
                setDisplayed(
                    isDeleting
                        ? current.substring(0, displayed.length - 1)
                        : current.substring(0, displayed.length + 1)
                );
            }, speed);
        }

        return () => clearTimeout(timeout);
    }, [displayed, isDeleting, roleIndex]);

    return (
        <section id="hero" className="hero">
            {/* Floating shapes */}
            <div className="hero__shapes">
                <div className="hero__shape hero__shape--1" />
                <div className="hero__shape hero__shape--2" />
                <div className="hero__shape hero__shape--3" />
                <div className="hero__shape hero__shape--4" />
                <div className="hero__shape hero__shape--5" />
            </div>

            <div className="container hero__layout">
                {/* Left Image — Developer */}
                <motion.div
                    className="hero__image hero__image--left"
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <img src="/images/developer-hero.png" alt="Developer illustration" />
                </motion.div>

                {/* Center Content */}
                <div className="hero__content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hero__label"
                    >
                        <span className="hero__label-dot" />
                        Available for opportunities
                    </motion.div>

                    <motion.h1
                        className="hero__title"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        <span className="gradient-text">{personalInfo.name}</span>
                    </motion.h1>

                    <motion.div
                        className="hero__role-wrapper"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <span className="hero__role-prefix">{'>'} </span>
                        <span className="hero__role-text">{displayed}</span>
                        <span className="hero__cursor">|</span>
                    </motion.div>

                    <motion.p
                        className="hero__description"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.45 }}
                    >
                        {personalInfo.summary}
                    </motion.p>

                    <motion.div
                        className="hero__actions"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                    >
                        <a href="#contact" className="btn btn-primary">
                            <FiMail /> Get In Touch
                        </a>
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-outline"
                        >
                            <FiGithub /> GitHub
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-outline"
                        >
                            <FiLinkedin /> LinkedIn
                        </a>
                    </motion.div>

                    <motion.div
                        className="hero__scroll-indicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        <div className="hero__scroll-mouse">
                            <div className="hero__scroll-dot" />
                        </div>
                        <span>Scroll to explore</span>
                    </motion.div>
                </div>

                {/* Right Image — AI Bot */}
                <motion.div
                    className="hero__image hero__image--right"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <img src="/images/ai-bot-hero.png" alt="AI bot illustration" />
                </motion.div>
            </div>
        </section>
    );
}
