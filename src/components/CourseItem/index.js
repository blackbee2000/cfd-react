export default function CourseItem({status, person, liked, name, description, teacher}){
    var statusTag;
    if(status === "end"){
        statusTag = <span className="badge b1">Đã kết thúc</span>;
    }
    if(status === "happening"){
        statusTag = <span className="badge b2">Đang diễn ra</span>;
    }
    if(status === "upcoming"){
        statusTag = <span className="badge b3">Sắp khai giảng</span>;
    }
    return(
        <div className="col-md-4 course">
                <div className="wrap">
                    <a className="cover" href="#">
                    <img src="img/img1.png" alt="" />
                    {statusTag}
                    <div className="hover">
                        <div className="top">
                        <div className="user">
                            <img src="img/icon-user-white.svg" alt="" />
                            {person}</div>
                        <div className="heart">
                            <img src="img/icon-heart.svg" alt="" /> {liked}
                        </div>
                        </div>
                        <div className="share">
                        <img src="img/icon-viewmore.svg" alt="" />
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
                        <img src="img/avt.png" alt="" />
                        </div>
                        <div className="name">{teacher}</div>
                    </div>
                    <div className="register-btn">Đăng Ký</div>
                    </div>
                </div>
                </div>
    )
}