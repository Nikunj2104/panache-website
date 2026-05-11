import { ArrowRight, Activity, Cpu, ShieldCheck, Gauge, Thermometer, Droplets, RadioTower } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero hero-gradient">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="badge">Built around real dairy floors</div>
          <h1 className="hero-title">
            Dairy automation that feels practical,
            <span className="text-accent"> fast, and alive.</span>
          </h1>
          <p className="hero-subtitle">
            Panache Engineering connects weighbridges, PLCs, lab equipment, HMIs, cameras, and reporting into one hands-on command layer for dairy teams.
          </p>
          
          <div className="hero-actions">
            <a href="#surabhi" className="btn btn-primary btn-lg">
              Explore SURABHI <ArrowRight size={20} />
            </a>
            <a href="#about" className="btn btn-secondary btn-lg">
              See how we work
            </a>
          </div>

          <div className="hero-features">
            <div className="feature-item">
              <Activity className="text-accent" size={24} />
              <span>Live plant signals</span>
            </div>
            <div className="feature-item">
              <Cpu className="text-accent" size={24} />
              <span>Hardware-first automation</span>
            </div>
            <div className="feature-item">
              <ShieldCheck className="text-accent" size={24} />
              <span>Operator-friendly reporting</span>
            </div>
          </div>
        </div>

        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="plant-board">
            <div className="plant-board-header">
              <div>
                <span className="eyebrow">Reception bay</span>
                <strong>Monday batch run</strong>
              </div>
              <span className="live-pill">Live</span>
            </div>

            <div className="plant-meter">
              <div className="meter-copy">
                <span>Raw milk received</span>
                <strong>42,680 L</strong>
              </div>
              <div className="meter-ring">
                <Gauge size={54} />
              </div>
            </div>

            <div className="plant-flow">
              <div className="flow-step active">
                <Droplets size={22} />
                <span>Weighbridge</span>
              </div>
              <div className="flow-line"></div>
              <div className="flow-step active">
                <Thermometer size={22} />
                <span>Lab check</span>
              </div>
              <div className="flow-line"></div>
              <div className="flow-step">
                <RadioTower size={22} />
                <span>PLC sync</span>
              </div>
            </div>

            <div className="plant-stats">
              <div>
                <span>Tanker TAT</span>
                <strong>18 min</strong>
              </div>
              <div>
                <span>CIP cycle</span>
                <strong>Stable</strong>
              </div>
              <div>
                <span>Reports</span>
                <strong>12 ready</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
