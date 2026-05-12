import { Factory, Cog, Layers, Droplet } from 'lucide-react';
import './ProcessSolutions.css';

const ProcessSolutions = () => {
  const products = [
    "Milk Powder", "Ghee", "Ice Cream", "Curds", 
    "Cheese", "Butter", "Paneer", "Whey"
  ];

  return (
    <section id="solutions" className="section process-section">
      <div className="container">
        <div className="process-header">
          <div className="badge">Plant expertise</div>
          <h2 className="section-title">End-to-End Dairy Process Solutions</h2>
          <p className="section-subtitle">
            Modern dairy plants are complex combinations of equipment working in synchronism to convert raw milk into diverse products.
          </p>
        </div>

        <div className="process-grid">
          <div className="card process-card">
            <div className="icon-wrapper">
              <Factory size={32} />
            </div>
            <h3>Liquid Milk Processing (LMP)</h3>
            <p>We design and automate systems that convert raw milk from cattle owners into processed milk, ready for consumption or further processing.</p>
          </div>

          <div className="card process-card">
            <div className="icon-wrapper">
              <Cog size={32} />
            </div>
            <h3>PLC-Aided Operations</h3>
            <p>Full plant operations carried out by one or more PLCs (Programmable Logic Controllers), precisely managing pumps, valves, and switches.</p>
          </div>

          <div className="card process-card full-width">
            <div className="icon-wrapper">
              <Layers size={32} />
            </div>
            <h3>Milk Product Plants</h3>
            <p>Scalable automation for numerous products including:</p>
            <div className="products-tag-cloud">
              {products.map(p => (
                <span key={p} className="product-tag">{p}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="process-footer-note">
          <Droplet className="text-accent" />
          <span>Synchronizing complex equipment for maximum efficiency.</span>
        </div>
      </div>
    </section>
  );
};

export default ProcessSolutions;
