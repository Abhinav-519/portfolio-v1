import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMapPin, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { experience } from '../data/resume';
import './Experience.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] },
    }),
};

function ExperienceCard({ exp, index }) {
    const [expanded, setExpanded] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <motion.div
            ref={ref}
            className="exp-card"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            custom={index}
        >
            <div className="exp-card__timeline">
                <div className="exp-card__dot" />
                {index < experience.length - 1 && <div className="exp-card__line" />}
            </div>

            <div className="glass-card exp-card__content">
                <div className="exp-card__header">
                    <div>
                        <h3 className="exp-card__company">{exp.company}</h3>
                        <p className="exp-card__role">{exp.role}</p>
                    </div>
                    <div className="exp-card__meta">
                        <span className="exp-card__period">{exp.period}</span>
                        <span className="exp-card__location">
                            <FiMapPin size={12} /> {exp.location}
                        </span>
                    </div>
                </div>

                <div className="exp-card__tags">
                    {exp.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>

                <motion.div
                    className="exp-card__details"
                    initial={false}
                    animate={{ height: expanded ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                >
                    <ul className="exp-card__highlights">
                        {exp.highlights.map((h, i) => (
                            <li key={i}>{h}</li>
                        ))}
                    </ul>
                    <div className="exp-card__impact">
                        <strong>Impact:</strong> {exp.impact}
                    </div>
                </motion.div>

                <button
                    className="exp-card__toggle"
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? (
                        <>Show Less <FiChevronUp /></>
                    ) : (
                        <>Show More <FiChevronDown /></>
                    )}
                </button>
            </div>
        </motion.div>
    );
}

export default function Experience() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="experience" className="section experience-section" ref={ref}>
            <div className="container">
                <motion.span
                    className="section-label"
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                    custom={0}
                >
                    Experience
                </motion.span>
                <motion.h2
                    className="section-title"
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                    custom={1}
                >
                    Where I've <span className="gradient-text">made impact</span>
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                    custom={2}
                >
                    4+ years of building production systems across finance, healthcare, telecom, and e-commerce.
                </motion.p>

                <div className="exp-timeline">
                    {experience.map((exp, i) => (
                        <ExperienceCard key={exp.company} exp={exp} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
