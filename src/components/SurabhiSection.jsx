import { useState } from 'react';
import {
  Database, Activity, MonitorSmartphone, Truck, Zap,
  ThermometerSun, Camera, Network, BarChart3, ChevronRight, ChevronDown, Shield
} from 'lucide-react';
import surabhiOverviewImg from '../assets/surabhi-overview.png';
import labImg from '../assets/dairy_lab_automation.png';
import weighbridgeImg from '../assets/weighbridge_automation.png';
import hmiImg from '../assets/industrial_hmi_control.png';
import plcImg from '../assets/industrial_plc_kepware.png';
import securityImg from '../assets/dairy_security_rfid.png';
import DashboardPreview from './DashboardPreview';
import './SurabhiSection.css';

const SurabhiSection = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeReportIdx, setActiveReportIdx] = useState(0);

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
    "Milk Reception",
    "Dispatch report",
    "Utility Generation",
    "Utility Consumption",
    "Live Tank Inventory",
    "MPL Wise Heating and Cooling Temperature"
  ];

  return (
    <section id="surabhi" className="section bg-primary">
      <div className="container">
        <div className="surabhi-header">
          <div className="badge">Flagship Product</div>
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
                <div className="why-surabhi-premium mt-12 mb-12">
                  <div className="why-content-wrapper card glass">
                    <div className="why-text-side">
                      <div className="badge accent">SURABHI Analytics</div>
                      <h3 className="premium-title">What is the use of SURABHI?</h3>
                      <p className="premium-subtitle">
                        SURABHI is an integrated MIS system for dairy plants. It pulls live data from PLCs and connected devices,
                        then turns the full milk processing lifecycle from reception to dispatch into clear dashboards, reports, and alerts.
                      </p>
                      <button
                        className="btn btn-primary btn-sm mt-6"
                        onClick={() => {
                          setActiveTab('reports');
                          window.scrollTo({ top: document.getElementById('surabhi').offsetTop + 200, behavior: 'smooth' });
                        }}
                      >
                        Explore Sample Reports <ChevronRight size={16} />
                      </button>
                    </div>

                    <div className="why-features-grid">
                      <div className="why-feature-item">
                        <div className="mini-icon"><Activity size={18} /></div>
                        <div className="mini-text">
                          <h5>Annual Milk Reception</h5>
                          <p>How much Milk is received in current year?</p>
                        </div>
                      </div>
                      <div className="why-feature-item">
                        <div className="mini-icon"><BarChart3 size={18} /></div>
                        <div className="mini-text">
                          <h5>Production Intelligence</h5>
                          <p>Which Product is produced more in selected time-frame?</p>
                        </div>
                      </div>
                      <div className="why-feature-item">
                        <div className="mini-icon"><Zap size={18} /></div>
                        <div className="mini-text">
                          <h5>Utility Consumption</h5>
                          <p>Get exact number for Utility Consumption during production.</p>
                        </div>
                      </div>
                      <div className="why-feature-item">
                        <div className="mini-icon"><Database size={18} /></div>
                        <div className="mini-text">
                          <h5>Digital Exports</h5>
                          <p>Provision to export Reports in Excel and PDF.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="surabhi-overview-img-container">
                  <img src={surabhiOverviewImg} alt="SURABHI System Overview" className="surabhi-overview-img" />
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
                <div className="reports-accordion">
                  {reports.map((report, idx) => (
                    <div
                      key={idx}
                      className={`accordion-item ${activeReportIdx === idx ? 'active' : ''}`}
                    >
                      <div
                        className="accordion-header"
                        onClick={() => setActiveReportIdx(activeReportIdx === idx ? null : idx)}
                      >
                        <div className="header-left">
                          {activeReportIdx === idx ? (
                            <ChevronDown size={20} className="text-white" />
                          ) : (
                            <ChevronRight size={20} className="text-accent" />
                          )}
                          <span className="report-name">{report}</span>
                        </div>
                        {activeReportIdx === idx && (
                          <div className="live-tag">
                            <span className="dot"></span> ACTUAL SYSTEM REPORT
                          </div>
                        )}
                      </div>

                      <div className="accordion-collapse-wrapper">
                        <div className="accordion-content">
                          <DashboardPreview activeIndex={idx} />
                        </div>
                      </div>
                    </div>
                  ))}
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
