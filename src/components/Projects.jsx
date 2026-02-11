import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../data/resume';
import './Projects.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] },
    }),
};

export default function Projects() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="projects" className="section projects-section" ref={ref}>
            <div className="container">
                <motion.span
                    className="section-label"
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                    custom={0}
                >
                    Projects
                </motion.span>
                <motion.h2
                    className="section-title"
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                    custom={1}
                >
                    Things I've <span className="gradient-text">built</span>
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                    custom={2}
                >
                    A selection of projects showcasing AI, full-stack development, and creative engineering.
                </motion.p>

                <div className="projects__grid">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            className="project-card"
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={fadeUp}
                            custom={3 + i}
                            whileHover={{ y: -8 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                            <div
                                className="project-card__accent"
                                style={{ background: project.gradient }}
                            />
                            <div className="project-card__body">
                                <div className="project-card__header">
                                    <h3 className="project-card__title">{project.title}</h3>
                                </div>
                                <p className="project-card__description">{project.description}</p>
                                <ul className="project-card__highlights">
                                    {project.highlights.map((h, idx) => (
                                        <li key={idx}>{h}</li>
                                    ))}
                                </ul>
                                <div className="project-card__tags">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
