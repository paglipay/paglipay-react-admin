import React, { useEffect, useState } from "react";
import { render } from 'react-dom';
import DTable from '../DTable';
import { Container, Row, Col, Pagination, Dropdown, DropdownButton, InputGroup, FormControl } from 'react-bootstrap'

import axios from 'axios'

function Panel(props) {

  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [data, setData] = useState(props.pdata)

  useEffect(() => {
      console.log(props.pdata)
    loadData(data.url)

  }, [])
  useEffect(() => {
    console.log('search: ', search)
    loadData(data.url)
  }, [page, search])

  const items = [];
  for (let number = 1; number <= 3; number++) {
    items.push(
      <Pagination.Item key={number} value={number} onClick={e => setPage(e.target.text)} active={number === page}>
        {number}
      </Pagination.Item>,
    );
  }


  const loadData = (url) =>
    axios.get(
      url,
      {
        params: {
          _page: page,
          _limit: 100,
          q: search
        }
      }
    )
      .then(res => {
        console.log(res.data)
        setData({
          ...data,
          // "_list": res.data 
          "_list": res.data
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

export default Panel;
