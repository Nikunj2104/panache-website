import { Cpu, Gauge, Zap, Check } from 'lucide-react';
import './ProcessSolutions.css';

const ProcessSolutions = () => {
  const streams = [
    {
      id: "automation",
      title: "Automation",
      icon: Cpu,
      description: "End-to-end control system design, programming, and software integration to make your plant operations seamless, intelligent, and visible in real time.",
      offerings: [
        "PLC & SCADA Systems",
        "HMI Development & Configuration",
        "Custom MIS Reporting (SURABHI)",
        "Database & IoT Integration"
      ],
      industries: [
        "Dairy & Food Processing",
        "Beverages & Liquid Foods",
        "Pharmaceuticals & Biotech",
        "Water & Wastewater Treatment"
      ]
    },
    {
      id: "instrumentation",
      title: "Instrumentation",
      icon: Gauge,
      description: "Precise process measurement and control hardware to ensure quality, safety, and repeatable production cycles across all stages.",
      offerings: [
        "Sensors (Flow, Temp, Level, Pressure)",
        "SS 304 & SS 316 Instrument Fittings",
        "Process Gauges & Control Valves",
        "Calibration & Validation Support"
      ],
      industries: [
        "Chemical & Process Plants",
        "Dairy & Beverage Products",
        "Oil & Gas / Petrochemicals",
        "Power & Utility Sectors"
      ]
    },
    {
      id: "electrical",
      title: "Electrical",
      icon: Zap,
      description: "Industrial power distribution, panel fabrication, and robust wiring layouts built for hazardous and demanding plant floors.",
      offerings: [
        "Control Panels (MCC/PCC)",
        "Thermo Plastic & SS Enclosures",
        "Power Distribution & Switchgear",
        "Industrial Cabling & Cable Trays"
      ],
      industries: [
        "Heavy Manufacturing & Engineering",
        "FMCG & Packaging Lines",
        "Agro-Processing Plants",
        "Industrial Infrastructure"
      ]
    }
  ];

  return (
    <section id="solutions" className="section process-section">
      <div className="container">
        <div className="process-header">
          <div className="badge">Total Engineering Solutions</div>
          <h2 className="section-title">Our Engineering Streams & Supported Industries</h2>
          <p className="section-subtitle">
            We deliver integrated automation, instrumentation, and electrical engineering options tailored to your specific industrial operations.
          </p>
        </div>

        <div className="process-grid">
          {streams.map((stream) => {
            const Icon = stream.icon;
            return (
              <div key={stream.id} className="card process-card">
                <div className="icon-wrapper">
                  <Icon size={32} />
                </div>
                <h3>{stream.title}</h3>
                <p className="stream-desc">{stream.description}</p>
                
                <div className="stream-details">
                  <div className="details-group">
                    <h4>Key Offerings</h4>
                    <ul className="offerings-list">
                      {stream.offerings.map((offering, i) => (
                        <li key={i}>
                          <Check size={16} className="text-accent flex-shrink-0" />
                          <span>{offering}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="details-group">
                    <h4>Supported Industries</h4>
                    <div className="industry-tags">
                      {stream.industries.map((ind, i) => (
                        <span key={i} className="industry-tag">{ind}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="process-footer-note">
          <Cpu className="text-accent animate-pulse" />
          <span>Synchronizing complex hardware & software for modern operations.</span>
        </div>
      </div>
    </section>
  );
};

export default ProcessSolutions;
