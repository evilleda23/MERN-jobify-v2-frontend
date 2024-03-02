import { Container, Image, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';

import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <Navbar>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <Logo />
            </Navbar.Brand>
          </LinkContainer>
        </Container>
      </Navbar>
      <div className='container page'>
        <div className='info'>
          <h1>
            Job <span>Finder</span> App
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            quisquam ullam illum tenetur a, debitis temporibus labore vero amet
            minus, eaque quidem enim ducimus in! Eveniet veritatis doloremque
            fugit asperiores?
          </p>
          <Link
            to={'/register'}
            className='btn btn-primary mr-2'
          >
            Register
          </Link>
          <Link
            to={'/login'}
            className='btn btn-primary mr-2'
          >
            Login / Demo User
          </Link>
        </div>
        <Image
          src={main}
          alt='Job hunter app'
          className='img main-img'
        />
      </div>
    </Wrapper>
  );
};
export default Landing;
