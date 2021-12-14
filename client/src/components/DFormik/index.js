import React from 'react'
import { Formik } from "formik";
import { Table, Button, Form } from 'react-bootstrap'

function DFormik() {
    const initialValues = {
        email: "test@email.com",
        password: ""
    };
    function onSubmit(values) {
        // Do stuff here...
        alert(JSON.stringify(values, null, 2));
    }
    return (
        <Formik {...{ initialValues, onSubmit }}>
            {({ getFieldProps, handleSubmit }) => (
                <>
                    <Form className="baseForm" onSubmit={handleSubmit} noValidate>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className="email formField" type="email" id="email" placeholder="Enter email" {...getFieldProps("email")} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </>
            )}
        </Formik>
    );
}

export default DFormik
