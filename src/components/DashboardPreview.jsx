import React, { useState } from 'react';
import { Truck, Droplet, Zap, Activity, ThermometerSun } from 'lucide-react';
import './DashboardPreview.css';

// Import actual report images
import milkReport from '../assets/reports/image.png';
import dispatchReport from '../assets/reports/image copy.png';
import utilityGenReport from '../assets/reports/image copy 2.png';
import utilityConsReport from '../assets/reports/image copy 3.png';
import inventoryReport from '../assets/reports/image copy 4.png';
import tempReport from '../assets/reports/image copy 5.png';

const DashboardPreview = ({ activeIndex }) => {
  const views = [
    { id: 'milk', name: 'Milk Reception', icon: <Activity size={14} />, img: milkReport },
    { id: 'dispatch', name: 'Dispatch report', icon: <Truck size={14} />, img: dispatchReport },
    { id: 'gen', name: 'Utility Generation', icon: <Zap size={14} />, img: utilityGenReport },
    { id: 'cons', name: 'Utility Consumption', icon: <Zap size={14} />, img: utilityConsReport },
    { id: 'inventory', name: 'Live Tank Inventory', icon: <Droplet size={14} />, img: inventoryReport },
    { id: 'temp', name: 'MPL Wise Heating and Cooling Temperature', icon: <ThermometerSun size={14} />, img: tempReport }
  ];

  const currentView = views[activeIndex] || views[0];

  return (
    <div className="report-image-container animate-fade-in" key={activeIndex}>
      <img 
        src={currentView.img} 
        alt={currentView.name} 
        className="report-screenshot"
      />
      <div className="report-zoom-hint">
        Industrial MIS Screenshot
      </div>
    </div>
  );
};

export default DashboardPreview;
