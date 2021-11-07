import { CourseList } from "../../components";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import CarouselBottom from "./components/CarouselBottom";
import SpecialThing from "./components/SpecialThing";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import courseService from "../../services/courseService";
import Loading from "../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { fetchListCourseAction } from "../../store/action/courseAction";

export default function Home(){

    let [state, setState] = useState({
        data: {},
        loading: true
    });

    let dispatch = useDispatch();
    const {offline, online} = useSelector(state => state.course)

    useEffect(async () =>{
        let data  = await courseService.home();
        let course = dispatch(fetchListCourseAction());
        setState({
            data: data,
            loading: false
        })
    }, []);
    
    console.log('dataaa', online)
    let {data, loading} = state;
    // if(loading) return <Loading/>;
    return(
        <main className="homepage" id="main">
            {/* <Banner /> */}
            <CourseList 
                description="The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                has a more-or-less normal" 
                name = "Khóa học Offline"
                list = {offline}
            />
            <CourseList name = "Khóa học Online" list = {online}/>
            {/* <SpecialThing /> */}
            {/* <section class="section-3">
                <div class="container">
                    <div class="video">
                        <iframe id="video-intro"
                            src="https://www.youtube-nocookie.com/embed/6t-MjBazs3o?controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=ytplayer"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen allowscriptaccess="always"></iframe>

                        <div class="video-src" data-src="video/CFD-video-intro.mp4"></div>
                        <div class="play-btn btn-video-intro">
                            <img src="img/play-video-btn.png" alt="">
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <Carousel review={data.review}/>
            <CarouselBottom gallery={data.gallery}/>
            <section className="section-action">
                <div className="container">
                    <h3>Bạn đã sẵn sàng trở thành chiến binh tiếp theo của Team CFD chưa?</h3>
                    <Link to="/collab" className="btn main round bg-white">Đăng ký</Link>
                </div>
            </section> */}
        </main>
    )
}