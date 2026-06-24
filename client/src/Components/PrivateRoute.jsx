import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  return <> {false ? children : <Navigate to="/" />} </>;
}

export default PrivateRoute;
