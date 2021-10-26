import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export function Header(){

    let {user} = useAuth();

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
                                <Link >Đăng xuất</Link>
                            </div>
                        </div>
                        {/* <div class="not-login bg-none">
                                <a href="#" class="btn-register">Đăng nhập</a>
                                <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
                            </div> */}
                    </div>  
                </div>
            </header>
        </>
    )
}