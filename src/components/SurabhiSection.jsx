import React, { useState } from 'react';
import { 
  Database, Activity, MonitorSmartphone, Layers, Truck, 
  ThermometerSun, Camera, Network, BarChart3, ChevronRight 
} from 'lucide-react';
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
    { icon: <Database size={24} />, name: "Weighbridge", desc: "Captures live weight of raw milk, generates unique TankerId." },
    { icon: <ThermometerSun size={24} />, name: "Lab Equipment", desc: "Collects live data like measurements and test results without manual entry." },
    { icon: <MonitorSmartphone size={24} />, name: "HMIs", desc: "Displays real-time status of processes like milk flow, pasteurizer temp, CIP cycles." },
    { icon: <Network size={24} />, name: "PLCs & Kepware", desc: "Ruggedized control with Kepware interface to Database Management System." },
    { icon: <Camera size={24} />, name: "IP Cameras & RFID", desc: "Monitors entry/exit. RFID grants quick, secure access via boom barriers." }
  ];

  const reports = [
    "Milk Reception", "Dispatch Report", "Utility Generation", 
    "Utility Consumption", "Live Tank Inventory", "MPL Wise Heating & Cooling"
  ];

  return (
    <section id="surabhi" className="section bg-primary">
      <div className="container">
        <div className="surabhi-header text-center mb-12">
          <div className="badge">Our Flagship Product</div>
          <h2 className="section-title">
            <span className="text-accent">SURABHI</span> Dairy MIS
          </h2>
          <p className="section-subtitle">
            System for User Reports & Analytics and Bidirectional Hardware Interface
          </p>
        </div>

        <div className="surabhi-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview & Features
            </button>
            <button 
              className={`tab-btn ${activeTab === 'integrations' ? 'active' : ''}`}
              onClick={() => setActiveTab('integrations')}
            >
              Hardware Integrations
            </button>
            <button 
              className={`tab-btn ${activeTab === 'reports' ? 'active' : ''}`}
              onClick={() => setActiveTab('reports')}
            >
              Analytics & Reports
            </button>
          </div>

          <div className="tabs-content">
            {/* Tab 1: Overview */}
            {activeTab === 'overview' && (
              <div className="tab-pane animate-fade-in">
                <div className="surabhi-intro card mb-12">
                  <h3>What is SURABHI?</h3>
                  <p>
                    SURABHI is an integrated MIS system that acts as a central hub for Dairy Plants. It tracks and monitors plant operations, acquiring real-time data from PLCs and various devices to provide comprehensive oversight of the entire milk processing lifecycle—from reception to dispatch.
                  </p>
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
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {integrations.map((item, idx) => (
                    <div key={idx} className="integration-card card">
                      <div className="icon-wrapper">{item.icon}</div>
                      <h4>{item.name}</h4>
                      <p>{item.desc}</p>
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
