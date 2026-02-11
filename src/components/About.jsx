import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] },
    }),
};

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" className="section about" ref={ref}>
            <div className="container">
                <motion.span
                    className="section-label"
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                    custom={0}
                >
                    About Me
                </motion.span>
                <motion.h2
                    className="section-title"
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                    custom={1}
                >
                    Building the future with <span className="gradient-text">AI & Code</span>
                </motion.h2>

                <motion.div
                    className="about__quote-card glass-card"
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                    custom={2}
                >
                    <p className="about__paragraph">
                        With over four years of experience spanning enterprise platforms, cloud-native architectures, and AI-driven systems, I've had the privilege of building technology that truly makes a difference - from powering millions of daily transactions at DBS Bank in Asia, to crafting GenAI platforms at Wayfair that redefine how people discover products.
                    </p>
                    <p className="about__paragraph">
                        I believe the best engineering happens at the intersection of curiosity and craftsmanship. Every line of code is an opportunity to solve a real problem, and every system I build is designed not just to work, but to inspire confidence and delight in the people who use it.
                    </p>
                    <p className="about__paragraph">
                        Whether it's orchestrating RAG pipelines, designing intuitive full-stack applications, or deploying resilient cloud infrastructure - I'm driven by the same core belief:
                    </p>
                    <blockquote className="about__inspiring-quote">
                        "Technology is at its most powerful when it disappears into the experience - when intelligence feels effortless, and complexity becomes simplicity."
                    </blockquote>
                </motion.div>
            </div>
        </section>
    );
}
