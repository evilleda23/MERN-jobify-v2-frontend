import { FaUserCircle } from 'react-icons/fa';
import { useDashboardContext } from '../pages/DashboardLayout';
import { Image, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
const LogoutContainer = () => {
  const { userInfo, logoutUser } = useDashboardContext();

  return (
    <>
      <NavDropdown
        title={
          <>
            {userInfo.avatar ? (
              <Image
                src={userInfo.avatar}
                alt='avatar'
                className='img'
              />
            ) : (
              <FaUserCircle className='mr-2 align-self-center' />
            )}
            {userInfo.name}
          </>
        }
        id='username'
      >
        <LinkContainer to='/profile'>
          <NavDropdown.Item>Profile</NavDropdown.Item>
        </LinkContainer>
        <NavDropdown.Item onClick={logoutUser}>Logout</NavDropdown.Item>
      </NavDropdown>
    </>
  );
};
export default LogoutContainer;
