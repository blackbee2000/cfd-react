import { Link } from "react-router-dom";
import { generatePath } from "react-router";
import { Skeleton } from '@mui/material'

export default function CourseItem(props){
    let badgeClass = props.course_status === 'da-ket-thuc' ? 'b1' : props.course_status === 'dang-dien-ra' ? 'b2' : 'b3'
    return(
        <div className="col-md-4 course">
            <div className="wrap">
                {
                    !props.loading ? (
                        <Link className="cover" to={'/courseDetail/' + props.slug}>
                            <img src={props.thumbnail.link} alt="" />
                            <span className={`badge ${badgeClass}`}>{props.course_status === 'da-ket-thuc' ? 'Đã kết thúc' : props.course_status === 'dang-dien-ra' ? "Đang diễn ra" : "Sắp khai giảng"}</span>
                            <div className="hover">
                                <div className="top">
                                    <div className="user">
                                        <img src="/img/icon-user-white.svg" alt="" />
                                        {15}
                                    </div>
                                    <div className="heart">
                                        <img src="/img/icon-heart.svg" alt="" /> {200}
                                    </div>
                                </div>
                                <div className="share">
                                    <img src="/img/icon-viewmore.svg" alt="" />
                                </div>
                            </div>
                        </Link>                                 
                    ):(
                        <Skeleton height={250} />
                    )
                }
                {
                    !props.loading ? (
                        <div className="info">
                            <a className="name" href="#">
                                {props.title}
                            </a>
                            <p className="des">
                                {props.short_description}
                            </p>
                        </div>
                    ):(
                        <div className="info">
                            <Skeleton variant="text" />
                            <Skeleton variant="text" height={30} />
                        </div>
                    )
                }
                {
                    !props.loading ? (
                        <div className="bottom">
                            <div className="teacher">
                                <div className="avatar">
                                <img src={props.teacher.avatar.link} alt="" />
                                </div>
                                <div className="name">{props.teacher.title}</div>
                            </div>
                            <Link to={generatePath("/register/:slug", props)} className="register-btn">
                                Đăng ký
                            </Link>
                        </div>
                    ):(
                        <Skeleton height={50} />
                    )
                }
                
            </div>
        </div>
    )
}