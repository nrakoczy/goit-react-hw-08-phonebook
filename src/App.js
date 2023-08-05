import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import RestrictedRoute from 'components/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute';
import Layout from 'components/Layout/Layout';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';

import useAuth from 'hooks/useAuth';

const Home = lazy(() => import('pages/Home'));
const RegisterForm = lazy(() => import('pages/RegisterForm'));
const Contacts = lazy(() => import('pages/Contacts'));
const Login = lazy(() => import('pages/Login'));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const { isRefreshing } = useAuth();

  if (isRefreshing) {
    return null;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegisterForm />}
              redirectTo="/contacts"
            />
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute component={<Login />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<Contacts />} redirectTo="/login" />
          }
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
