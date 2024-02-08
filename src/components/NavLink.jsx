import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';
const NavLink = ({ path, icon, text }) => {
  return (
    <LinkContainer to={`${path}`}>
      <Nav.Link className='nav-link'>
        <span className='icon'>{icon}</span> {text}
      </Nav.Link>
    </LinkContainer>
  );
};
export default NavLink;

NavLink.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};
