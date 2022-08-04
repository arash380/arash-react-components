import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  isAuthenticated,
  reverseCheck,
  loading,
  AppLoader,
  defaultRoute = "/",
  notAuthRoute,
}) => {
  if (loading && AppLoader) return <AppLoader />;

  if (reverseCheck && isAuthenticated) {
    return <Navigate to={defaultRoute} />;
  }

  if (!reverseCheck && !isAuthenticated) {
    return <Navigate to={notAuthRoute} />;
  }

  return <Outlet />;
};

ProtectedRoute.propTypes = {
  AppLoader: PropTypes.any,
  defaultRoute: PropTypes.string,
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool,
  notAuthRoute: PropTypes.string,
  reverseCheck: PropTypes.bool,
};

export default ProtectedRoute;
