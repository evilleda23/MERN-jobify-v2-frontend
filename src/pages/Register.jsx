import { useState } from 'react';
import { Link } from 'react-router-dom';

import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { FormContainer, Logo } from '../components';

const Register = () => {
  const [name, setName] = useState('');
  return (
    <Wrapper>
      <Card className='py-5 '>
        <FormContainer>
          <Form className='form'>
            <Logo />
            <h4>Register</h4>
            <Form.Group
              controlId='name'
              className='my-3'
            >
              <Form.Label className='form-label'>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Name'
                className='form-input'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button
              type='submit'
              variant='primary'
              className='btn-block my-3'

              // disabled={isLoading}
            >
              Register
            </Button>
            <Row className='py-3'>
              <Col>
                Already have an account? <Link to={`/login`}>Login here!</Link>
              </Col>
            </Row>
          </Form>
        </FormContainer>
      </Card>
    </Wrapper>
  );
};
export default Register;
