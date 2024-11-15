import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {

 const {user} = useContext(AuthContext);
 if (loading){
    return children;
 }
 if (user){
    return children;
 }

    return (
        <div>
            <Navigate to='/login'></Navigate>
        </div>
    );
};

export default PrivateRoute;