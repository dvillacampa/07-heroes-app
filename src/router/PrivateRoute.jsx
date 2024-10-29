import { useContext } from 'react'
import { AuthContext } from '../auth';
import { Navigate, useLocation } from 'react-router-dom';


export const PrivateRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );

    // Guardamos el último path del usuario
    const { pathname, search } = useLocation();
    localStorage.setItem( 'lastPath', pathname + search);
  
    return (logged) ? children : <Navigate to="/login" />

}
