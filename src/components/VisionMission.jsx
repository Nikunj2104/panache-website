import { Target, Lightbulb, Wrench, Users } from 'lucide-react';
import './VisionMission.css';

const VisionMission = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container">
        <div className="vm-header">
          <div className="badge">The way we build</div>
          <h2 className="section-title">Automation with people still in the room.</h2>
          <p className="section-subtitle">We design plant systems that operators can trust, maintenance teams can service, and managers can read without chasing spreadsheets.</p>
        </div>

        <div className="vm-grid">
          <div className="card vm-card">
            <div className="icon-wrapper">
              <Lightbulb size={32} />
            </div>
            <h3 className="vm-title">Our Vision</h3>
            <p className="vm-text">
              To be a trusted leader in delivering intelligent, reliable, and innovative automation solutions that empower industries to achieve operational excellence, sustainability, and digital transformation on a global scale.
            </p>
          </div>

          <div className="card vm-card">
            <div className="icon-wrapper">
              <Target size={32} />
            </div>
            <h3 className="vm-title">Our Mission</h3>
            <p className="vm-text">
              To deliver cutting-edge automation solutions that enhance productivity, ensure safety, and drive sustainable growth for our clients. We are committed to providing high-quality, cost-effective technologies that simplify complex processes and reduce manual efforts.
            </p>
          </div>
        </div>

        <div className="capabilities-section">
          <h3 className="capabilities-title">Engineering Capabilities</h3>
          <div className="capabilities-grid">
            <div className="cap-item">Turnkey Automation & Process Digitalization</div>
            <div className="cap-item">Hardware for Process Automation</div>
            <div className="cap-item">Control Panels</div>
            <div className="cap-item">Thermo Plastic and SS 304 Enclosure</div>
            <div className="cap-item">SS 304 & SS 316 Instrument Fittings (Gauges, Ball-Valve etc)</div>
          </div>
        </div>

        <div className="vm-notes-row">
          <div className="vm-note">
            <Wrench size={26} />
            <span>Site-aware engineering, not off-the-shelf decoration.</span>
          </div>

          <div className="vm-note cool">
            <Users size={26} />
            <span>Built for operators, supervisors, owners, and audit teams.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
