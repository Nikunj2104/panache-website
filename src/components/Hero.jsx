import React from 'react';
import { ArrowRight, Activity, Cpu, ShieldCheck } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero hero-gradient">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="badge">Innovating Dairy Automation</div>
          <h1 className="hero-title">
            Intelligent Solutions for <br/>
            <span className="text-accent">Dairy Digitalization</span>
          </h1>
          <p className="hero-subtitle">
            Turnkey Projects in Dairy Digitalization & Hardware for Process Automation. We deliver cutting-edge automation solutions that enhance productivity and drive sustainable growth.
          </p>
          
          <div className="hero-actions">
            <a href="#surabhi" className="btn btn-primary btn-lg">
              Discover SURABHI <ArrowRight size={20} />
            </a>
            <a href="#about" className="btn btn-secondary btn-lg">
              Our Expertise
            </a>
          </div>

          <div className="hero-features">
            <div className="feature-item">
              <Activity className="text-accent" size={24} />
              <span>Real-time Monitoring</span>
            </div>
            <div className="feature-item">
              <Cpu className="text-accent" size={24} />
              <span>Process Automation</span>
            </div>
            <div className="feature-item">
              <ShieldCheck className="text-accent" size={24} />
              <span>Reliable Hardware</span>
            </div>
          </div>
        </div>

        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="glass-panel">
            <div className="dashboard-mockup">
              <div className="mockup-header">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
              </div>
              <div className="mockup-body">
                <div className="chart-skeleton"></div>
                <div className="stats-grid">
                  <div className="stat-box"></div>
                  <div className="stat-box"></div>
                  <div className="stat-box"></div>
                  <div className="stat-box"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
