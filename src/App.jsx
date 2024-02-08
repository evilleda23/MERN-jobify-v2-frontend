import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { ToastContainer } from 'react-bootstrap';

import './index.css';

import {
  AddJob,
  Admin,
  AllJobs,
  DashboardLayout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Profile,
  Register,
  Stats,
} from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<HomeLayout />}
      errorElement={<Error />}
    >
      <Route
        index
        element={<Landing />}
      />

      <Route
        path='register'
        element={<Register />}
      />
      <Route
        path='login'
        element={<Login />}
      />

      <Route
        path='dashboard'
        element={<DashboardLayout />}
      >
        <Route
          index
          element={<AddJob />}
        />
        <Route
          path='stats'
          element={<Stats />}
        />
        <Route
          path='all-jobs'
          element={<AllJobs />}
        />
        <Route
          path='profile'
          element={<Profile />}
        />
        <Route
          path='admin'
          element={<Admin />}
        />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};
export default App;
