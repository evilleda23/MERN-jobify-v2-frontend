import { Outlet } from 'react-router-dom';

import Wrapper from '../assets/wrappers/Dashboard';
import { Header } from '../components';
import { Container } from 'react-bootstrap';
import { createContext, useContext, useState } from 'react';
const DashboardContex = createContext();
const DashboardLayout = () => {
  //temp
  const user = {
    name: 'John Doe',
    email: '',
  };

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const logoutUser = () => {
    //logout user
  };

  return (
    <DashboardContex.Provider
      value={{
        user,
        isDarkTheme,
        toggleDarkTheme,
        logoutUser,
      }}
    >
      <Wrapper>
        <Header />
        <main className='py-3'>
          <Container>
            <Outlet />
          </Container>
        </main>
      </Wrapper>
    </DashboardContex.Provider>
  );
};

export const useDashboardContext = () => {
  return useContext(DashboardContex);
};

export default DashboardLayout;
