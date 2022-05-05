import React from 'react';
import {useLocation, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const RequireAuth = ({children}) => {
    const location = useLocation()
    const isLogin = useSelector((state) => state.login.isLogin)

   if(!isLogin) {
       return <Navigate to='/log-in' state={{from: location}}/>
   }

   return children;
};

export default RequireAuth;