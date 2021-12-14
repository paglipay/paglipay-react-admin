import React, { useEffect, useState } from "react";

import { Container, Row, Col } from 'react-bootstrap'
import DFormik from "./components/DFormik"
// import './App.css';

import Panel from "./components/Panel";

function App() {

  const [panelData, setPanelData] = useState([
    {
      _list: [],
      url: "http://192.168.2.201:3001/employees",
      header: [
        "first_name",
        "last_name",
        "email"
      ]
    },
    {
      _list: [],
      url: "http://localhost:3001/audit?parse_for_sn.building=luskin",
      header: [
        "device_id",
        // "parse_for_sn"
        // "ID",
        // "parse_for_sn.building",
        // "RANCID-CONTENT-TYPE",
        // "NAME",
        // "SysContact",
        // "SysLocation",
        // "SysModelName",
        // "Serial Number", "Processor ID",
        // "DESCR",
        // "PID",
        // "VID",
        // "SN"
      ]
    },
    {
      _list: [],
      url: "http://192.168.2.201:3001/vlans",
      header: [
        "device_id",
        "object_id",
        "rancid_type",
        "description",
        "ip_address",
        "spanning-tree"
      ]
    }

  ])

  return (
    <Container fluid>
      <Row>
        <Col>
          <DFormik />
        </Col>
      </Row>
      <Row>
        {panelData.map(e => {
          return (<Col>
            <Panel pdata={e} />
          </Col>)
        }
        )}
      </Row>

    </Container>
  );
}

export default App;
