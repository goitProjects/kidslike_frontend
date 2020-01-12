import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as authSelectors from '../../redux/auth/authSelectors';

const ProtectedRoute = ({ component: Component, ...restProps }) => {
  const isAuthenticated = useSelector(store => authSelectors.getIsAuth(store));
  return (
    <Route {...restProps}>
      {isAuthenticated ? (
        <Component />
      ) : (
        <Redirect
          to={{
            pathname: '/auth',
            state: { from: restProps.location },
          }}
        />
      )}
    </Route>
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

export default ProtectedRoute;
