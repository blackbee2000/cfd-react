import Course from "./pages/Course";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Page404 from "./pages/Page404";
import CourseDetail from "./pages/CourseDetail";
import Email from "./pages/Email";
import Faq from "./pages/Faq";
import CoinIntroduce from "./pages/CoinIntroduce";
import Collab from "./pages/Collab";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Team from "./pages/Team";
import Pay from "./pages/Pay";
import { Header, Footer, NavBar } from "./components";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import { createContext, useState } from "react";
import LoginModal from "./components/LoginModal";
import PrivateRoute from "./components/PrivateRoute";
import authService from "./services/authService";
import { useSelector } from "react-redux";

export const Context = createContext();

export default function App() {

  // const [user, setUser] = useState(JSON.parse(localStorage.getItem('login')));
  const [open, setOpen] = useState(false);
  const {user} = useSelector(state => state.auth);
  
  const togglePopupLogin = (flag) => {
    if(typeof flag === 'undefined'){
      setOpen(!open);
    }
    else{
      setOpen(flag);
    }
  }

  // const login = async (user) => {
  //   let res = await authService.login(user);
  //   if(res.data){
  //     console.log(res.data);
  //     localStorage.setItem('login', JSON.stringify(res.data));
  //     localStorage.setItem('token', JSON.stringify(res.data.token));
  //     setUser(res.data);
  //   }
  //   else{
  //     return res.error;
  //   }
  // }

  // const logout = () => {
  //   setUser(null);
  //   localStorage.removeItem('login');
  // }
  return (
    <Router>
        <Context.Provider value={{user}}>
          <Header />
          <NavBar />
          <div className="overlay_nav"></div>
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/course" component={Course} />
            <Route path="/project" component={Project} />
            <Route path="/courseDetail/:slug" component={CourseDetail} />
            <Route path="/email" component={Email} />
            <Route path="/faq" component={Faq} />
            <Route path="/coinIntroduce" component={CoinIntroduce} />
            <Route path="/collab" component={Collab} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/pay" component={Pay} />
            <Route path="/register/:slug" component={Register} />
            <Route path="/team" component={Team} />
            <Route component={Page404} />
          </Switch>

          {!user && <LoginModal />}
          <Footer />
        </Context.Provider>
    </Router>
  );
}

