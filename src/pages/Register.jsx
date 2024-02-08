import { Link } from 'react-router-dom';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormContainer, FormRow, Logo } from '../components';

const Register = () => {
  return (
    <Wrapper>
      <Card className='py-5 '>
        <FormContainer>
          <Form className='form'>
            <Logo />
            <h4>Register</h4>
            <FormRow
              defaultValue=''
              text='Name'
              type='text'
              name='name'
              isRequired={true}
            />
            <FormRow
              defaultValue=''
              text='Last Name'
              type='text'
              name='lastname'
              isRequired={true}
            />
            <FormRow
              defaultValue=''
              text='Location'
              type='text'
              name='location'
              isRequired={true}
            />
            <FormRow
              defaultValue=''
              text='Email'
              type='email'
              name='email'
              isRequired={true}
            />
            <FormRow
              defaultValue=''
              text='Password'
              type='password'
              name='password'
              isRequired={true}
            />
            <Button
              type='submit'
              variant='primary'
              className='btn-block my-3'

              // disabled={isLoading}
            >
              Register
            </Button>
            <Row className='py-3 text-center'>
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
