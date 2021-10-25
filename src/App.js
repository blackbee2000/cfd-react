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

export default function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <div className="overlay_nav"></div>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/course" >
          <Course/>
        </Route>
        <Route path="/project" >
          <Project />
        </Route>
        <Route path="/courseDetail/:id">
          <CourseDetail />
        </Route>
        <Route path="/email">
          <Email/>
        </Route>
        <Route path="/faq">
          <Faq/>
        </Route>
        <Route path="/coinIntroduce" >
          <CoinIntroduce/>
        </Route>
        <Route path="/collab" >
          <Collab/>
        </Route>
        <Route path="/profile" >
          <Profile/>
        </Route>
        <Route path="/pay" >
          <Pay />
        </Route>
        <Route path="/register" >
          <Register />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

