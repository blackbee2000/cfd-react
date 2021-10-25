import { NavLink } from "react-router-dom";
export function NavBar(){

    function handleClickMenu(){
        document.querySelector('body').classList.toggle('menu-is-show');
    }

    return(
        <nav className="nav">
            <ul>
                {/* <li className="li_login">
                    <a href="#">Đăng nhập</a>
                    <a href="#">Đăng ký</a>
                </li> */}
                <li onClick={handleClickMenu}>
                    <NavLink to="/" exact>Trang chủ</NavLink>
                </li>
                <li onClick={handleClickMenu}>
                    <NavLink to="/team">CFD Team</NavLink>
                </li>
                <li onClick={handleClickMenu}>
                    <NavLink to="/course">Khóa Học</NavLink>
                </li>
                <li onClick={handleClickMenu}>
                    <NavLink to="/project">Dự Án</NavLink>
                </li>
                <li onClick={handleClickMenu}>
                    <NavLink to="/collab">Liên hệ</NavLink>
                </li>
            </ul>
        </nav>
    )
}