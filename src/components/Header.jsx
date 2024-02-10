import { Container, Nav, Navbar } from 'react-bootstrap';

import Logo from './Logo';

import { LinkContainer } from 'react-router-bootstrap';

import { useDashboardContext } from '../pages/DashboardLayout';
import links from '../utils/links';
import NavLink from './NavLink';
import LogoutContainer from './LogoutContainer';

const Header = () => {
  const { logoutUser, userInfo } = useDashboardContext();

  return (
    <header>
      <Navbar
        expand='md'
        collapseOnSelect
      >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <Logo />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />

          <Navbar.Collapse
            id='basic-navbar-nav'
            className='mr-md-auto'
          >
            <Nav className='ml-auto nav-links'>
              {links.map((link, index) => {
                const { text, path, icon } = link;

                return (
                  <NavLink
                    icon={icon}
                    path={path}
                    text={text}
                    key={index}
                  />
                );
              })}
              <LogoutContainer />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
