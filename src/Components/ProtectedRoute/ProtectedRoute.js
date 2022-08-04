import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ authenticated, reverse, loading, AppLoader, defaultRoute = "/", alterRoute }) => {
  if (loading && AppLoader) return <AppLoader />;

  if (reverse && authenticated) {
    return <Navigate to={defaultRoute} />;
  }

  if (!reverse && !authenticated) {
    return <Navigate to={alterRoute} />;
  }

  return <Outlet />;
};

ProtectedRoute.propTypes = {
  AppLoader: PropTypes.any,
  defaultRoute: PropTypes.string,
  authenticated: PropTypes.bool,
  loading: PropTypes.bool,
  alterRoute: PropTypes.string,
  reverse: PropTypes.bool,
};

export default ProtectedRoute;
