import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import '../../assets/custom.scss';
import { useDispatch } from "react-redux";
import { logoutAction, openLoginAction } from "../../store/action/authAction";

export function Header(){

    let {user} = useAuth();

    const dispacth = useDispatch();

    function handleClickMenu(){
        document.querySelector('body').classList.toggle('menu-is-show');
    }

    return(
        <>
            <header id="header">
                <div className="wrap">
                    <div className="menu-hambeger" onClick={handleClickMenu}>
                        <div className="button">
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className="text">menu</span>
                    </div>
                    <a href="#" className="logo">
                        <img src="img/logo.svg" alt="" />
                        <h1>CFD</h1>
                    </a>
                    <div className="right">
                        {
                            user ? (
                                <div className="have-login">
                                    <div className="account">
                                        <a href="#" className="info">
                                        <div className="name">{user?.name}</div>
                                        <div className="avatar">
                                            <img src={user?.avatar} alt="" />
                                        </div>
                                        </a>
                                    </div>
                                    <div className="hamberger">
                                    </div>
                                    <div className="sub">
                                        <Link to="/profile/yourCourse">Khóa học của tôi</Link>
                                        <Link to="/profile">Thông tin tài khoản</Link>
                                        <Link to="#" onClick={(ev => {ev.preventDefault(); dispacth(logoutAction());})} >Đăng xuất</Link>
                                    </div>
                                </div>
                            ):( 
                                <div className="not-login bg-none">
                                    <a href="#" className="btn-register" onClick={(ev) => {ev.preventDefault(); dispacth(openLoginAction());}}>Đăng nhập</a>
                                    <a href="login.html" className="btn main btn-open-login">Đăng ký</a>
                                </div>
                            )
                        }
                    </div>  
                </div>
            </header>
        </>
    )
}