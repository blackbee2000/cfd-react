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
        <Route exact path="/" component={Home} />
        <Route path="/course" component={Course} />
        <Route path="/project" component={Project} />
        <Route path="/courseDetail/:id" component={CourseDetail} />
        <Route path="/email" component={Email} />
        <Route path="/faq" component={Faq} />
        <Route path="/coinIntroduce" component={CoinIntroduce} />
        <Route path="/collab" component={Collab} />
        <Route path="/profile" component={Profile} />
        <Route path="/pay" component={Pay} />
        <Route path="/register" component={Register} />
        <Route path="/team" component={Team} />
        <Route component={Page404} />
      </Switch>

      <Footer />
    </Router>
  );
}

