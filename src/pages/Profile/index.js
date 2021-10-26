import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import DoneProject from "./components/DoneProject";
import HistoryBill from "./components/HistoryBill";
import Info from "./components/Info";
import YourCoin from "./components/YourCoin";
import YourCourse from "./components/YourCourse";

export default function Profile(){

    let { url } = useRouteMatch();
    let {user} = useAuth();
    
    return(
        <main className="profile" id="main">
        <section>
          <div className="top-info">
            <div className="avatar">
              <img src={user?.avatar} alt="" />
              <div className="camera" />
            </div>
            <div className="name">{user?.name}</div>
            <p className="des">Thành viên của team CFD1-OFFLINE</p>
          </div>
          <div className="container">
            <div className="tab">
              <div className="tab-title">
                <NavLink exact to={`${url}`}>Thông tin tài khoản</NavLink>
                <NavLink to={`${url}/yourCourse`}>Khóa học của bạn</NavLink>
                <NavLink to={`${url}/yourProject`}>Dự án đã làm</NavLink>
                <NavLink to={`${url}/historyBill`}>Lịch sử thanh toán</NavLink>
                <NavLink to={`${url}/yourCoin`}>Quản lý COIN của tôi</NavLink>
              </div>
              <div className="tab-content">
                <Switch>
                  <Route exact path={`${url}`}>
                    <Info />
                  </Route>
                  <Route path={`${url}/yourCourse`}>
                    <YourCourse />
                  </Route>
                  <Route path={`${url}/yourProject`}>
                    <DoneProject />
                  </Route>
                  <Route path={`${url}/historyBill`}>
                    <HistoryBill />
                  </Route>
                  <Route path={`${url}/yourCoin`}>
                    <YourCoin />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
}