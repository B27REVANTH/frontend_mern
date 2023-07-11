import { Navigate } from 'react-router-dom';
import { UseAuthContext } from './useAuthContext';

export const useLogout = () => {
  const { dispatch } = UseAuthContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user');

    // dispatch logout action
    dispatch({ type: 'LOGOUT' });
    window.location.reload();

    return <Navigate to="/Signup" />;
  };
  return { logout };
};
