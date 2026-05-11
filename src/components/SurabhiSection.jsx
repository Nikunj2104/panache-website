import { useState } from 'react';
import { 
  Database, Activity, MonitorSmartphone, Truck, 
  ThermometerSun, Camera, Network, BarChart3, ChevronRight, Shield
} from 'lucide-react';
import surabhiOverviewImg from '../assets/surabhi-overview.png';
import labImg from '../assets/dairy_lab_automation.png';
import weighbridgeImg from '../assets/weighbridge_automation.png';
import hmiImg from '../assets/industrial_hmi_control.png';
import plcImg from '../assets/industrial_plc_kepware.png';
import securityImg from '../assets/dairy_security_rfid.png';
import './SurabhiSection.css';

const SurabhiSection = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    { icon: <Activity size={24} />, title: "Real-time Monitoring", desc: "Acquires live data from PLCs and equipment." },
    { icon: <Database size={24} />, title: "Data Archiving", desc: "Stores and archives data for analysis and reporting." },
    { icon: <Truck size={24} />, title: "Tanker TAT Tracking", desc: "Tracks Turn-Around-Time using RFID & IP Cameras." },
    { icon: <BarChart3 size={24} />, title: "Dashboards & Reports", desc: "Customized real-time dashboards in Excel & PDF." }
  ];

  const integrations = [
    { 
      name: "Weighbridge & Milk Reception", 
      desc: "Captures live weight of raw milk and generates unique TankerIDs. Seamlessly transfers raw milk from tankers to silos.", 
      image: weighbridgeImg,
      bullets: ["Live weight capture", "Unique TankerID generation", "Reception sequence tracking"]
    },
    { 
      name: "Lab Equipment & Milko Scan", 
      desc: "Direct integration with lab devices to collect measurements like Fat, SNF, and Outlet Temp without manual entry.", 
      image: labImg,
      bullets: ["Automated measurement collection", "Quality analysis (Fat/SNF)", "Error-free data logging"]
    },
    { 
      name: "HMIs & Process Control", 
      desc: "Real-time status of milk flow, pasteurizer temperatures, tank levels, and CIP cycles on industrial touch interfaces.", 
      image: hmiImg,
      bullets: ["Process flow visualization", "Temperature & level monitoring", "CIP cycle tracking"]
    },
    { 
      name: "Security & RFID Access", 
      desc: "IP Cameras and RFID scanners monitor entry/exit points and automatically grant access via boom barriers.", 
      image: securityImg,
      bullets: ["Authorized vehicle access", "Automated boom barriers", "Entry/Exit monitoring"]
    },
    { 
      name: "Device Interface (PLC & Kepware)", 
      desc: "Bidirectional communication between industrial PLCs and SQL Server databases for deep data logging and machine-level control.", 
      image: plcImg,
      bullets: [
        "PLC: Ruggedized automation & control", 
        "Automates specific processes or entire lines", 
        "Kepware: Interface to SQL Server database"
      ]
    }
  ];

  const reports = [
    "Milk Reception", "Dispatch Report", "Utility Generation", 
    "Utility Consumption", "Live Tank Inventory", "MPL Wise Heating & Cooling"
  ];

  return (
    <section id="surabhi" className="section bg-primary">
      <div className="container">
        <div className="surabhi-header">
          <div className="badge">Flagship product</div>
          <h2 className="section-title">
            <span className="text-accent">SURABHI</span> Dairy MIS for busy plants
          </h2>
          <p className="section-subtitle">
            A central hub for reception, processing, utility tracking, hardware signals, analytics, and exports.
          </p>
        </div>

        <div className="surabhi-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`tab-btn ${activeTab === 'integrations' ? 'active' : ''}`}
              onClick={() => setActiveTab('integrations')}
            >
              Integrations
            </button>
            <button 
              className={`tab-btn ${activeTab === 'reports' ? 'active' : ''}`}
              onClick={() => setActiveTab('reports')}
            >
              Reports
            </button>
          </div>

          <div className="tabs-content">
            {/* Tab 1: Overview */}
            {activeTab === 'overview' && (
              <div className="tab-pane animate-fade-in">
                <div className="surabhi-intro card mb-12">
                  <h3>What is SURABHI?</h3>
                  <p>
                    SURABHI is an integrated MIS system for dairy plants. It pulls live data from PLCs and connected devices, then turns the full milk processing lifecycle from reception to dispatch into clear dashboards, reports, and alerts.
                  </p>
                  <div className="intro-tags">
                    <span>RFID ready</span>
                    <span>PLC connected</span>
                    <span>Excel and PDF exports</span>
                  </div>
                </div>
                
                <div className="surabhi-overview-img-container">
                  <img src={surabhiOverviewImg} alt="SURABHI System Overview" className="surabhi-overview-img" />
                </div>
                
                <h3 className="mb-6">Key Features</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {features.map((feature, idx) => (
                    <div key={idx} className="feature-card">
                      <div className="feature-icon">{feature.icon}</div>
                      <h4>{feature.title}</h4>
                      <p>{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Integrations */}
            {activeTab === 'integrations' && (
              <div className="tab-pane animate-fade-in">
                <div className="integrations-list">
                  {integrations.map((item, idx) => (
                    <div key={idx} className="integration-row card">
                      <div className="integration-text">
                        <div className="integration-header">
                          {item.icon ? <div className="icon-wrapper">{item.icon}</div> : null}
                          <h4>{item.name}</h4>
                        </div>
                        <p>{item.desc}</p>
                        <ul className="integration-bullets">
                          {item.bullets.map((bullet, i) => (
                            <li key={i}><ChevronRight size={14} className="text-accent" /> {bullet}</li>
                          ))}
                        </ul>
                      </div>
                      {item.image && (
                        <div className="integration-image">
                          <img src={item.image} alt={item.name} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Reports */}
            {activeTab === 'reports' && (
              <div className="tab-pane animate-fade-in">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="reports-list card">
                    <h3 className="mb-6">Comprehensive Reporting</h3>
                    <ul className="report-items">
                      {reports.map((report, idx) => (
                        <li key={idx}>
                          <ChevronRight size={18} className="text-accent" />
                          <span>{report}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="reports-info card surabhi-gradient">
                    <h3 className="text-white mb-4">Why use SURABHI Analytics?</h3>
                    <ul className="benefits-list">
                      <li>Track exact milk reception volumes annually</li>
                      <li>Identify highest producing products in specific timeframes</li>
                      <li>Monitor precise utility consumption during production</li>
                      <li>Export all reports seamlessly to Excel and PDF</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurabhiSection;
