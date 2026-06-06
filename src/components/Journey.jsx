import { Calendar, Award, Code, Monitor, Zap } from 'lucide-react';
import './Journey.css';

const Journey = () => {
  const steps = [
    {
      year: "2019",
      title: "Founding",
      desc: "Founded as Server and Hardware Supplier",
      icon: <Monitor size={24} />
    },
    {
      year: "2020",
      title: "Expansion",
      desc: "Expanded into MIS Software Solution",
      icon: <Code size={24} />
    },
    {
      year: "2021",
      title: "Hardware Solutions",
      desc: "Introduced Instrument Fitting and Control Panel Solution",
      icon: <Zap size={24} />
    },
    {
      year: "2022",
      title: "Manufacturing",
      desc: "Started Supply of Thermo-Plastic and SS304 Enclosure",
      icon: <Award size={24} />
    },
    {
      year: "Present",
      title: "Full Automation Provider",
      desc: "Presently operating as a complete Industrial and Automation Solutions Provider",
      icon: <Calendar size={24} />,
      isHighlight: true
    }
  ];

  return (
    <section id="journey" className="section bg-secondary">
      <div className="container">
        <div className="journey-header">
          <div className="badge">Our Timeline</div>
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">From hardware suppliers to a complete industrial automation force.</p>
        </div>

        <div className="timeline">
          {steps.map((step, index) => (
            <div key={index} className={`timeline-item ${step.isHighlight ? 'highlight' : ''}`}>
              <div className="timeline-marker">
                <div className="marker-icon">{step.icon}</div>
                <div className="marker-line"></div>
              </div>
              <div className="timeline-content card">
                <span className="step-year">{step.year}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
