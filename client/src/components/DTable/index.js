import React, { useState, useEffect } from 'react'
import { Table, Button, Form } from 'react-bootstrap'

function DTable({ data }) {

    const [editRow, setEditRow] = useState(data['_list'].length - 1)
    const [filterRow, setfilterRow] = useState(data['header'].reduce((e, i) => { return { ...e, [i]: "" } }, {}))

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th></th>
                    {data ? data['header'].map((e, i) => {
                        return (<th key={`he-${e}`}>{e ? <Form.Control key={e} type="text" name={`${e}`} value={filterRow[e]} placeholder={e} onChange={e => setfilterRow({ ...filterRow, [e.target.name]: e.target.value })} /> : null}</th>)
                    }
                    ) : null}
                </tr>
            </thead>
            <tbody>
                {data['_list'].filter(e => Object.keys(filterRow).map(fr => e[fr] === null || e[fr] === undefined ? (filterRow[fr] === "" ? true : false) : e[fr].toLowerCase().includes(filterRow[fr].toLowerCase())).every(v => v === true)).map((e, i) => {
                    return (<tr key={i}>
                        <td>
                            {/* <Button size="sm">Edit</Button> */}
                        </td>
                        {data['header'].map((h, ic) => {
                            return (<td key={`${i}-${ic}`}>
                                {i === editRow ? <Form.Control type="text" placeholder="Enter email" /> : <pre>{
                                e[h] && e[h]
                                }</pre>}
                            </td>)
                        })}
                    </tr>)
                }
                )
                }
            </tbody>
        </Table>
    )
}

export default DTable
