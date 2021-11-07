import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function PrivateRoute(props){

    let {user} = useAuth();
    if(!user) return <Redirect />

    return <Route {...props}/>
}