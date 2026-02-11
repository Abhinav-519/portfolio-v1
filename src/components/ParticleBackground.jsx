import { useEffect, useState } from 'react';

export default function ParticleBackground() {
    const [Comp, setComp] = useState(null);

    useEffect(() => {
        let cancelled = false;
        (async () => {
            try {
                const { default: Particles, initParticlesEngine } = await import('@tsparticles/react');
                const { loadSlim } = await import('@tsparticles/slim');
                await initParticlesEngine(async (engine) => {
                    await loadSlim(engine);
                });
                if (!cancelled) {
                    setComp(() => Particles);
                }
            } catch (e) {
                console.warn('Particles failed to load, skipping:', e);
            }
        })();
        return () => { cancelled = true; };
    }, []);

    if (!Comp) return null;

    return (
        <Comp
            id="tsparticles"
            options={{
                fullScreen: { enable: false },
                fpsLimit: 60,
                particles: {
                    number: {
                        value: 50,
                        density: { enable: true, width: 1920, height: 1080 },
                    },
                    color: {
                        value: ['#667eea', '#e040fb', '#00b4d8', '#43e97b', '#f39c12'],
                    },
                    links: {
                        enable: true,
                        color: '#667eea',
                        opacity: 0.06,
                        distance: 150,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 0.6,
                        direction: 'none',
                        random: true,
                        straight: false,
                        outModes: { default: 'out' },
                    },
                    opacity: {
                        value: { min: 0.05, max: 0.2 },
                        animation: {
                            enable: true,
                            speed: 0.8,
                            minimumValue: 0.05,
                            sync: false,
                        },
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                    shape: { type: 'circle' },
                    twinkle: {
                        particles: {
                            enable: true,
                            frequency: 0.02,
                            opacity: 0.5,
                            color: {
                                value: ['#e040fb', '#00b4d8', '#43e97b'],
                            },
                        },
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: 'grab',
                        },
                        resize: { enable: true },
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            links: { opacity: 0.15, color: '#e040fb' },
                        },
                    },
                },
                detectRetina: true,
            }}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    );
}
