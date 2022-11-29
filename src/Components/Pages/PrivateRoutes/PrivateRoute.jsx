import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../../UserContext/AuthContext';
import Loading from '../../Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthProvider);
    const location = useLocation()

    if(loading){
        return <Loading/>
    }

    if(user?.uid){
        return children;
    }

        return <Navigate to={'/login'} state={{from :location}} replace ></Navigate>

};

export default PrivateRoute;
