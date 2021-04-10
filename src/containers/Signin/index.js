import React from 'react';
import Layout from '../../components/Layout';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import { login } from "../../actions";
import { useDispatch } from "react-redux";

const Signin = () => {

    const dispatch = useDispatch();

    const userLogin = (e)=> {
        e.preventDefault();
        const user = {
            email: 'mkadmin@ex.com',
            password: 'mka0123456789'
        }
        dispatch(login(user));
    }

    return (
        <Layout>
            <Container>
                <Row style={{ marginTop: '60px'}} >
                    <Col md={{ span: 6, offset: 3 }} >
                        <Form onSubmit={userLogin}>
                            <Input
                                label="Email"
                                placeholder= "Email"
                                value=""
                                type="email"
                                onChange={()=>{}}
                            />
                            <Input
                                label="Password"
                                placeholder= "Password"
                                value=""
                                type="password"
                                onChange={()=>{}}
                            />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}

export default Signin;