import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthProvider } from '../../../UserContext/AuthContext';
import Loading from '../../Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthProvider);

    if(loading){
        return <Loading/>
    }

    if(user?.uid){
        return children;
    }
    else{
        <Navigate to={'/login'} replace= {true} ></Navigate>
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;
