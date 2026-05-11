import './ArchitectureDiagram.css';

const ArchitectureDiagram = () => {
  return (
    <div className="architecture-container">
      <div className="architecture-grid">
        {/* Row 1: Plant and PLC */}
        <div className="arch-node plant">
          <div className="node-content">
            <div className="plant-cloud">Industrial Plant</div>
          </div>
        </div>

        <div className="arch-connector bidirectional">
          <div className="connector-text">Data Interchange between Plant & PLC</div>
          <div className="arrow-double"></div>
        </div>

        <div className="arch-node plc">
          <div className="node-label-vertical">PLC</div>
        </div>

        <div className="arch-group-combined">
           {/* SCADA Section */}
           <div className="arch-subgroup scada-stack">
              <div className="arch-node scada-server">
                <div className="node-label-vertical">SCADA Server</div>
              </div>
              <div className="arch-node scada-app-box">
                <div className="box-header">SCADA / HMI</div>
                <div className="app-rect">SCADA / HMI Application</div>
                <div className="db-cylinder">SCADA / HMI Database</div>
              </div>
           </div>

           {/* MIS Section */}
           <div className="arch-node mis-server">
             <div className="box-header">MIS Server</div>
             <div className="mis-internal">
                <div className="opc-box">OPC Client</div>
                <div className="db-cylinder highlight">MIS Database</div>
                <div className="mis-app-box">MIS Application</div>
             </div>
           </div>
        </div>

        {/* Field Equipment */}
        <div className="field-equipment-box">
          Field Equipment
        </div>
      </div>

      {/* Numerical Indicators Overlay */}
      <div className="step-indicator p1">1</div>
      <div className="step-indicator p2">2</div>
      <div className="step-indicator p3">3</div>
      <div className="step-indicator p4">4</div>
    </div>
  );
};

export default ArchitectureDiagram;
