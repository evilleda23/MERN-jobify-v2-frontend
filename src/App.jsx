import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import './index.css';

import {
  DashboardLayout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Register,
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
      />
      <Route
        path='*'
        element={<Error />}
      />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
