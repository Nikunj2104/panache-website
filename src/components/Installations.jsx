import { MapPin, ShoppingBag } from 'lucide-react';
import './Installations.css';

const Installations = () => {
  const clients = [
    {
      name: "Heritage Foods",
      location: "Shamirpet, Hyderabad",
      products: "Milk, Curd, Lassi, Buttermilk, Ghee, Paneer, Cheese",
      color: "#008a45"
    },
    {
      name: "Britannia Dairy",
      location: "Maharashtra",
      products: "Cheese (cubes, slices, blocks), butter, and milk products Etc.",
      color: "#e31e24"
    },
    {
      name: "Milky Mist Dairy",
      location: "Tamilnadu",
      products: "Cheese, Curd, Paneer, Ghee, Buttermilk Etc.",
      color: "#005696"
    },
    {
      name: "Mahaan Milk Food",
      location: "Haathras, Uttar Pradesh",
      products: "Whey powders and permeates from fresh dairy whey",
      color: "#c8202f"
    },
    {
      name: "Shramik Milk & Food",
      location: "Ahmednagar, Maharashtra",
      products: "Ghee, cow ghee, curd, buttermilk, and skimmed milk",
      color: "#4e963d"
    }
  ];

  return (
    <section className="section installations-section bg-primary">
      <div className="container">
        <div className="installations-header text-center">
          <div className="badge">Our Footprint</div>
          <h2 className="section-title">Dairy MIS Installations</h2>
          <p className="section-subtitle mx-auto">Trusted by leading dairy brands across India for their digital transformation.</p>
        </div>

        <div className="installations-grid">
          {clients.map((client, index) => (
            <div key={index} className="installation-card card">
              <div className="client-logo-placeholder" style={{ backgroundColor: client.color }}>
                {client.name.charAt(0)}
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
