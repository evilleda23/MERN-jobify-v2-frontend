import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/LogoutContainer';
import { useState } from 'react';
import { useDashboardContext } from '../pages/DashboardLayout';
import { Button, Image } from 'react-bootstrap';
const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();
  return (
    <Wrapper>
      <Button
        type='button '
        onClick={() => setShowLogout(!showLogout)}
      >
        {user.avatar ? (
          <Image
            src={user.avatar}
            alt='avatar'
            className='img'
          />
        ) : (
          <FaUserCircle className='mr-2 align-self-center' />
        )}

        {user?.name}
        <FaCaretDown className='ml-1' />
      </Button>
      <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
        <Button
          type='button'
          className='dropdown-btn'
          onClick={logoutUser}
        >
          logout
        </Button>
      </div>
    </Wrapper>
  );
};
export default LogoutContainer;
