import { Link } from 'react-router-dom';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormContainer, FormRow, Logo } from '../components';

const Login = () => {
  return (
    <Wrapper>
      <Card className='py-5 '>
        <FormContainer>
          <Form className='form'>
            <Logo />
            <h4>Login</h4>

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
              Submit
            </Button>
            <Button
              type='button'
              variant='primary'
              className='btn-block my-3'

              // disabled={isLoading}
            >
              explore the app
            </Button>
            <Row className='py-3 text-center'>
              <Col>
                Not a member yet? <Link to={`/register`}>Register here!</Link>
              </Col>
            </Row>
          </Form>
        </FormContainer>
      </Card>
    </Wrapper>
  );
};
export default Login;
