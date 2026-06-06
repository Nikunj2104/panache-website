import { MapPin, ShoppingBag } from 'lucide-react';
import heritageLogo from '../assets/heritage-logo.png';
import britanniaLogo from '../assets/britannia-logo.png';
import milkyMistLogo from '../assets/milky-mist-logo.png';
import mahaanLogo from '../assets/mahaan-logo.png';
import shramikLogo from '../assets/shramik-logo.png';
import './Installations.css';

const Installations = () => {
  const clients = [
    {
      name: "Heritage Foods",
      logo: heritageLogo,
      location: "Shamirpet, Hyderabad",
      products: "Milk, Curd, Lassi, Buttermilk, Ghee, Paneer, Cheese",
      color: "#008a45"
    },
    {
      name: "Britannia Dairy",
      logo: britanniaLogo,
      location: "Maharashtra",
      products: "Cheese (cubes, slices, blocks), butter, and milk products Etc.",
      color: "#e31e24"
    },
    {
      name: "Milky Mist Dairy",
      logo: milkyMistLogo,
      location: "Tamilnadu",
      products: "Cheese, Curd, Paneer, Ghee, Buttermilk Etc.",
      color: "#005696"
    },
    {
      name: "Mahaan Milk Food",
      logo: mahaanLogo,
      location: "Haathras, Uttar Pradesh",
      products: "Whey powders and permeates from fresh dairy whey",
      color: "#c8202f"
    },
    {
      name: "Shramik Milk & Food",
      logo: shramikLogo,
      location: "Ahmednagar, Maharashtra",
      products: "Ghee, cow ghee, curd, buttermilk, and skimmed milk",
      color: "#4e963d"
    }
  ];

  return (
    <section id="projects" className="section installations-section bg-primary">
      <div className="container">
        <div className="installations-header">
          <div className="badge">Our Footprint</div>
          <h2 className="section-title">Featured Installations</h2>
          <p className="section-subtitle">Our automation, instrumentation, and reporting systems are trusted by leading processing facilities across India.</p>
        </div>

        <div className="installations-grid">
          {clients.map((client, index) => (
            <div key={index} className="installation-card card">
              <div className="client-logo-wrapper">
                <img src={client.logo} alt={`${client.name} logo`} className="client-logo-img" />
              </div>
              <div className="client-info">
                <h3>{client.name}</h3>
                <div className="info-row">
                  <MapPin size={16} className="text-accent" />
                  <span>{client.location}</span>
                </div>
                <div className="info-row items-start">
                  <ShoppingBag size={16} className="text-accent mt-1" />
                  <span className="product-list">{client.products}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Installations;
