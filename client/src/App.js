import React, { useEffect, useState } from "react";
import { render } from 'react-dom';
import DTable from './components/DTable';
import { Container, Row, Col, Pagination, Dropdown, DropdownButton, InputGroup, FormControl } from 'react-bootstrap'

import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {

  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [data, setData] = useState(
    {
      "header": [
        // "device_id", "object_id",  "rancid_type", "description", "ip_address", "spanning-tree"], "_list": [
        "ID", "building", "Serial Number", "SN"
      ],
      "_list": []
    })

  useEffect(() => {
    loadData()

  }, [])
  useEffect(() => {
    console.log('search: ', search)
    loadData()
  }, [page, search])
  const items = [];
  for (let number = 1; number <= 10; number++) {
    items.push(
      <Pagination.Item key={number} value={number} onClick={e => setPage(e.target.text)} active={number === page}>
        {number}
      </Pagination.Item>,
    );
  }


  const loadData = () =>
    axios.get(
      // "http://192.168.2.201:3001/vlans", 
      "http://localhost:3001/audit?device_id=br00f2n.luskin.ucla.net",
      // {
      //   params: {
      //     _page: page,
      //     _limit: 1000,
      //     q: search
      //   }
      // }
    )
      .then(res => {
        console.log(res.data)
        setData({
          ...data,
          // "_list": res.data 
          "_list": res.data[0].parse_for_sn
        })
      })
      .catch(err => console.log(err));

  return (
    <Container fluid>
      <InputGroup className="mb-3">
        <FormControl aria-label="Text input with dropdown button" name="search" value={search} onChange={e => setSearch(e.target.value)} />

        <DropdownButton
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-2"
          align="end"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
      <Pagination>{items}</Pagination>
      <DTable data={data} />
    </Container>
  );
}

export default App;
