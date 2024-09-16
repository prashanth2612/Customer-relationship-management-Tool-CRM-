import { Navigate } from 'react-router-dom';

let routes = {
    default :[
        {
            path:'/login',
            element: <Navigate to={"/"}/>
        }
    ]

}
export default routes;
