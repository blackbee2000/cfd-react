import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CourseList } from "../../components";
import Loading from "../../components/Loading";
import courseService from "../../services/courseService";
import Moment from "react-moment";

export default function CourseDetail(){

    let [detail, setDetail] = useState();
    let [related, setRelated] = useState();
    let {slug} = useParams();

    useEffect(async () =>{
        let dataDetail = await courseService.detail(slug);
        setDetail(dataDetail);
        let dataRelated = await courseService.related(slug);
        setRelated(dataRelated);
    }, [slug]);

    if(!detail) return <Loading />
    return(
        <main className="course-detail" id="main">
            <section className="banner style2" style={{background: '#cde6fb'}}>
                <div className="container">
                <div className="info">
                    <h1>{detail.data.title}</h1>
                    <div className="row">
                    <div className="date"><strong>Khai giảng: </strong> 
                        <Moment format="DD/MM/YYYY">{detail.data.opening_time}</Moment>
                    </div>
                    <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                    </div>
                    <div className="btn white round" style={{background: '#70b6f1'}}>đăng ký</div>
                </div>
                </div>
                <div className="bottom">
                <div className="container">
                    <div className="video">
                    <div className="icon">
                        <img src="/img/play-icon-white.png" alt="" />
                    </div> <span>giới thiệu</span>
                    </div>
                    <div className="money">{(detail.data.money).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</div>
                </div>
                </div>
            </section>
            <section className="section-2">
                <div className="container">
                <p className="des">{detail.data.long_description}</p>
                <h2 className="title">giới thiệu về khóa học</h2>
                <div className="cover">
                    <img src="/img/course-detail-img.png" alt="" />
                </div>
                <h3 className="title">nội dung khóa học</h3>
                {
                    detail.data.content.map((e, i) => (
                        <div className="accordion">
                            <div className="accordion__title">
                                <div className="date">Ngày {i+1}</div>
                                <h3>{e.title}</h3>
                            </div>
                            <div className="content">
                            {e.content}
                            </div>
                        </div>
                    ))
                }
                <h3 className="title">yêu cầu cần có</h3>
                <div className="row row-check">
                    {
                        detail.data.required.map((e, i) => (
                            <div className="col-md-6">{e.content}</div>
                        ))
                    }
                </div>
                <h3 className="title">hình thức học</h3>
                <div className="row row-check">
                    <div className="col-md-6">Học offline tại văn phòng, cùng Trần Nghĩa và 3 đồng nghiệp.</div>
                    <div className="col-md-6">Dạy và thực hành thêm bài tập online
                    thông qua Skype.</div>
                    <div className="col-md-6">Được các mentor và các bạn trong team CFD hổ trợ thông qua group CFD Facebook
                    hoặc phần mềm điều khiển máy tính.</div>
                    <div className="col-md-6">Thực hành 2 dự án thực tế với sự hướng dẫn của CFD Team.</div>
                </div>
                <h3 className="title">
                    <div className="date-start">lịch học</div>
                    <div className="sub">*Lịch học và thời gian có thể thống nhất lại theo số đông học viên.</div>
                </h3>
                <p>
                    <strong>Ngày bắt đầu: </strong> 09/09/2020 <br />
                    <strong>Thời gian học: </strong> Thứ 3 từ 18h45-21h45, Thứ 7 từ 12h-15h, Chủ nhật từ 15h-18h
                </p>
                <h3 className="title">Người dạy</h3>
                <div className="teaches">
                    <div className="teacher">
                    <div className="avatar">
                        <img src={detail.data.teacher.avatar.link} alt="" />
                    </div>
                    <div className="info">
                        <div className="name">{detail.data.teacher.title}</div>
                        <div className="title">{detail.data.teacher.position}</div>
                        <p className="intro">{detail.data.teacher.description}</p>
                        <p><strong>Website:</strong> <a href= {detail.data.teacher.website}> {detail.data.teacher.website}</a></p>
                    </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="user">
                    <img src="/img/user-group-icon.png" alt="" /> 12 bạn đã đăng ký
                    </div>
                    <div className="btn main btn-register round">đăng ký</div>
                    <div className="btn-share btn overlay round btn-icon">
                    <img src="/img/facebook.svg" alt="" />
                    </div>
                </div>
                </div>
            </section>
            <CourseList 
                smallTitle = "DỰ ÁN"
                name = "THÀNH VIÊN"
                list = {related?.data}
            />
            <CourseList 
                smallTitle = "KHÓA HỌC"
                name = "LIÊN QUAN"
                list = {related?.data}
            />
        </main>
    )
}