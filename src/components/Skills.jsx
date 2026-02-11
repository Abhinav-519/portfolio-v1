import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
    SiNodedotjs, SiFastapi, SiDjango, SiAngular, SiExpress,
    SiPostgresql, SiMongodb, SiMysql, SiRedis, SiFirebase, SiSupabase,
    SiDocker, SiKubernetes, SiGithubactions, SiJenkins, SiVercel,
    SiCloudflare, SiGit, SiPostman, SiJira,
    SiHtml5, SiCss3, SiTailwindcss, SiFigma, SiOpenai, SiLangchain,
    SiOpenjdk, SiAmazonwebservices,
} from 'react-icons/si';
import {
    TbBrain, TbGraph, TbMessageLanguage, TbEye, TbCamera, TbTerminal,
    TbDeviceMobile, TbLayoutKanban, TbApi, TbCloud, TbCode,
} from 'react-icons/tb';
import { skillCategories } from '../data/resume';
import './Skills.css';

const iconMap = {
    SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
    SiNodedotjs, SiFastapi, SiDjango, SiAngular, SiExpress,
    SiPostgresql, SiMongodb, SiMysql, SiRedis, SiFirebase, SiSupabase,
    SiDocker, SiKubernetes, SiGithubactions, SiJenkins, SiVercel,
    SiCloudflare, SiGit, SiPostman, SiJira,
    SiHtml5, SiCss3, SiTailwindcss, SiFigma, SiOpenai, SiLangchain,
    SiOpenjdk, SiAmazonwebservices,
    TbBrain, TbGraph, TbMessageLanguage, TbEye, TbCamera, TbTerminal,
    TbDeviceMobile, TbLayoutKanban, TbApi, TbCloud, TbCode,
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] },
    }),
};

export default function Skills() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="skills" className="section skills-section" ref={ref}>
            <div className="container">
                <motion.span
                    className="section-label"
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                    custom={0}
                >
                    Technical Skills
                </motion.span>
                <motion.h2
                    className="section-title"
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                    custom={1}
                >
                    My <span className="gradient-text">tech stack</span>
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                    custom={2}
                >
                    Tools and technologies I use to bring ideas to life.
                </motion.p>

                <div className="skills__grid">
                    {skillCategories.map((category, catIdx) => (
                        <motion.div
                            key={category.title}
                            className="glass-card skills__category"
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={fadeUp}
                            custom={3 + catIdx}
                        >
                            <h3 className="skills__category-title">{category.title}</h3>
                            <div className="skills__items">
                                {category.skills.map((skill) => {
                                    const Icon = iconMap[skill.icon];
                                    return (
                                        <motion.div
                                            key={skill.name}
                                            className="skills__item"
                                            whileHover={{ scale: 1.08, y: -4 }}
                                            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                        >
                                            <span className="skills__item-icon">
                                                {Icon ? <Icon /> : '🔧'}
                                            </span>
                                            <span className="skills__item-name">{skill.name}</span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
