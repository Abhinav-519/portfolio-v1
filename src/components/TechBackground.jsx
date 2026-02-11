import './TechBackground.css';

const techIcons = [
    // Code brackets and symbols
    { symbol: '</>', x: '5%', y: '15%', size: '2.5rem', delay: '0s', duration: '8s' },
    { symbol: '{ }', x: '85%', y: '10%', size: '2rem', delay: '2s', duration: '10s' },
    { symbol: '( )', x: '75%', y: '65%', size: '1.8rem', delay: '1s', duration: '9s' },
    { symbol: '[ ]', x: '15%', y: '70%', size: '1.6rem', delay: '3s', duration: '11s' },
    // Tech keywords
    { symbol: 'AI', x: '90%', y: '40%', size: '2.2rem', delay: '0.5s', duration: '7s' },
    { symbol: 'API', x: '10%', y: '45%', size: '1.5rem', delay: '4s', duration: '12s' },
    { symbol: '0101', x: '60%', y: '85%', size: '1.3rem', delay: '2.5s', duration: '9s' },
    { symbol: 'λ', x: '30%', y: '12%', size: '2.8rem', delay: '1.5s', duration: '8s' },
    { symbol: '#!', x: '50%', y: '75%', size: '1.8rem', delay: '3.5s', duration: '10s' },
    { symbol: '$ _', x: '70%', y: '20%', size: '1.6rem', delay: '0.8s', duration: '11s' },
    // More tech symbols
    { symbol: ':::', x: '20%', y: '85%', size: '1.4rem', delay: '2s', duration: '8s' },
    { symbol: '/*', x: '40%', y: '5%', size: '1.6rem', delay: '1.2s', duration: '9s' },
    { symbol: '=>', x: '92%', y: '75%', size: '2rem', delay: '3s', duration: '7s' },
    { symbol: '< >', x: '55%', y: '30%', size: '1.5rem', delay: '4.5s', duration: '10s' },
    { symbol: '&&', x: '8%', y: '55%', size: '1.7rem', delay: '0.3s', duration: '12s' },
    { symbol: '++', x: '45%', y: '60%', size: '1.4rem', delay: '2.8s', duration: '8s' },
];

// SVG circuit line patterns
function CircuitLines() {
    return (
        <svg className="tech-bg__circuits" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
            {/* Horizontal lines with nodes */}
            <line x1="100" y1="100" x2="400" y2="100" className="circuit-line" />
            <circle cx="400" cy="100" r="4" className="circuit-node" />
            <line x1="400" y1="100" x2="400" y2="250" className="circuit-line" />
            <circle cx="400" cy="250" r="4" className="circuit-node" />

            <line x1="800" y1="150" x2="1100" y2="150" className="circuit-line" />
            <circle cx="800" cy="150" r="4" className="circuit-node" />
            <line x1="800" y1="150" x2="800" y2="350" className="circuit-line" />

            <line x1="200" y1="500" x2="500" y2="500" className="circuit-line" />
            <circle cx="200" cy="500" r="4" className="circuit-node" />
            <line x1="500" y1="500" x2="500" y2="650" className="circuit-line" />
            <circle cx="500" cy="650" r="4" className="circuit-node" />

            <line x1="700" y1="600" x2="1000" y2="600" className="circuit-line" />
            <circle cx="1000" cy="600" r="4" className="circuit-node" />
            <line x1="1000" y1="600" x2="1000" y2="400" className="circuit-line" />
            <circle cx="1000" cy="400" r="4" className="circuit-node" />

            {/* Additional patterns */}
            <line x1="150" y1="300" x2="300" y2="300" className="circuit-line" />
            <circle cx="300" cy="300" r="3" className="circuit-node" />

            <line x1="900" y1="700" x2="1100" y2="700" className="circuit-line" />
            <circle cx="900" cy="700" r="3" className="circuit-node" />
        </svg>
    );
}

export default function TechBackground() {
    return (
        <div className="tech-bg">
            <CircuitLines />
            {techIcons.map((icon, i) => (
                <span
                    key={i}
                    className="tech-bg__icon"
                    style={{
                        left: icon.x,
                        top: icon.y,
                        fontSize: icon.size,
                        animationDelay: icon.delay,
                        animationDuration: icon.duration,
                    }}
                >
                    {icon.symbol}
                </span>
            ))}
        </div>
    );
}
