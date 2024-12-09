import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children, requiredRole}) => {
    const [adminAuthorized, setAdminAuthorized] = useState(null);
    const [userAuthorized, setUserAuthorized] = useState(null);
    useEffect(() => {
        const authenticate = async () => {
            try {
                const [adminResponse, userResponse] = await Promise.all([
                    axios.get('http://localhost:8080/admin/auth'),
                    axios.get('http://localhost:8080/user/auth')
                ]);
                if (adminResponse.data.status === "Admin Authorized" && requiredRole == "admin")
                    setAdminAuthorized(true);
                else setAdminAuthorized(false);
                if ((userResponse.data.status === "User Authorized" || adminResponse.data.status === "Admin Authorized")
                    && requiredRole == "any") {
                    setUserAuthorized(true);
                }
                else setUserAuthorized(false);
            } catch (err) {
                console.error(err);
            }
        }
        authenticate();
    }, []);
    
    if (adminAuthorized || userAuthorized) return children;
}

export default ProtectedRoute