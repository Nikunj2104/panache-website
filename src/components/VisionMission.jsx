import React from 'react';
import { Target, Lightbulb } from 'lucide-react';
import './VisionMission.css';

const VisionMission = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container">
        <div className="vm-header text-center mb-12">
          <h2 className="section-title">About <span className="text-accent">Panache</span></h2>
          <p className="section-subtitle">Driving Operational Excellence through Automation</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Vision Card */}
          <div className="card vm-card">
            <div className="icon-wrapper">
              <Lightbulb size={32} />
            </div>
            <h3 className="vm-title">Our Vision</h3>
            <p className="vm-text">
              To be a trusted leader in delivering intelligent, reliable, and innovative automation solutions that empower industries to achieve operational excellence, sustainability, and digital transformation on a global scale.
            </p>
          </div>

          {/* Mission Card */}
          <div className="card vm-card">
            <div className="icon-wrapper">
              <Target size={32} />
            </div>
            <h3 className="vm-title">Our Mission</h3>
            <p className="vm-text">
              Our mission is to deliver cutting-edge automation solutions that enhance productivity, ensure safety, and drive sustainable growth for our clients. We are committed to providing high-quality, cost-effective, and innovative technologies that simplify complex processes, reduce manual efforts, and empower industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
