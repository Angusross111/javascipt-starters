import React from "react";
import { Navigate,Outlet, useLocation } from 'react-router-dom';

function Dashboard() {
    return <h1>Dashboard</h1>;
  }

  function Account() {
    return <h1>Account</h1>;
  }

  function Login() {
    return <h1>Login</h1>;
  }

  const routes = [
    { 
      path: 'dashboard', 
      element: (
         <ProtectedRoute>
             <Dashboard />
         </ProtectedRoute>
      ) 
   },
   {
      path:"/account",
      element:(
         <ProtectedRoute>
            <Account/>
         </ProtectedRoute>
      ) 
   },
   {
      path:"/login",
      element:(
         <PublicRoute>
            <Login />
         </PublicRoute>
      ) 
   },

]  
function ProtectedRoute({ children }:any) {
    const isAuth = false
    const location = useLocation();

    return isAuth ? (
        children
    ) : (
            <Navigate
                to="/login"
                state={{ from: location }}
            />
        );
}
export function PublicRoute({ children }:any) {
    const isAuth = false
    let location = useLocation();

    return isAuth ? (
        <Navigate
            to="/dashboard"
            state={{ from: location }}
        />
    ) : (
            children
        );
}


export default routes;

