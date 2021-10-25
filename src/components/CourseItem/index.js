import { Link } from "react-router-dom";

export default function CourseItem({id, status, person, liked, name, description, teacher}){
    var statusTag;
    switch (status) {
        case "end":
            statusTag = <span className="badge b1">Đã kết thúc</span>;
            break;
        case "happening":
            statusTag = <span className="badge b2">Đang diễn ra</span>;
            break;
        case "upcoming":
            statusTag = <span className="badge b3">Sắp khai giảng</span>;
            break;
        default:
            break;
    }
    return(
        <Link to={{
            pathname: `/courseDetail/${id}`,
            state: {
                id: id,
                status: status,
                person: person,
                liked: liked,
                name: name,
                description: description,
                teacher: teacher,
            }
        }}
         className="col-md-4 course">
            <div className="wrap">
                <a className="cover" href="#">
                    <img src="/img/img1.png" alt="" />
                    {statusTag}
                    <div className="hover">
                        <div className="top">
                            <div className="user">
                                <img src="/img/icon-user-white.svg" alt="" />
                                {person}
                            </div>
                            <div className="heart">
                                <img src="/img/icon-heart.svg" alt="" /> {liked}
                            </div>
                        </div>
                        <div className="share">
                            <img src="/img/icon-viewmore.svg" alt="" />
                        </div>
                    </div>
                </a>
                <div className="info">
                    <a className="name" href="#">
                        {name}
                    </a>
                    <p className="des">
                        {description}
                    </p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                        <img src="/img/avt.png" alt="" />
                        </div>
                        <div className="name">{teacher}</div>
                    </div>
                    <Link to={{
                            pathname: `/courseDetail/${id}`,
                            state: {
                                id: id,
                                status: status,
                                person: person,
                                liked: liked,
                                name: name,
                                description: description,
                                teacher: teacher,
                            }
                        }} className="register-btn">
                        Đăng ký
                    </Link>
                </div>
            </div>
        </Link>
    )
}