import { CourseList } from "../../components";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import CarouselBottom from "./components/CarouselBottom";
import SpecialThing from "./components/SpecialThing";

export default function Home(){
    var list = [
        {
            status: "end",
            person: "12",
            liked: "100",
            name: "Front-end Căn Bản",
            description: "One of the best corporate fashion brands in Sydney",
            teacher: "Trần Nghĩa"
        },
        {
            status: "end",
            person: "12",
            liked: "100",
            name: "Front-end Căn Bản",
            description: "One of the best corporate fashion brands in Sydney",
            teacher: "Trần Nghĩa"
        },
        {
            status: "happening",
            person: "12",
            liked: "100",
            name: "Front-end Căn Bản",
            description: "One of the best corporate fashion brands in Sydney",
            teacher: "Trần Nghĩa"
        },
        {
            status: "happening",
            person: "12",
            liked: "100",
            name: "Front-end Căn Bản",
            description: "One of the best corporate fashion brands in Sydney",
            teacher: "Trần Nghĩa"
        },
        {
            status: "upcoming",
            person: "12",
            liked: "100",
            name: "Front-end Căn Bản",
            description: "One of the best corporate fashion brands in Sydney",
            teacher: "Trần Nghĩa"
        },
        {
            status: "upcoming",
            person: "12",
            liked: "100",
            name: "Front-end Căn Bản",
            description: "One of the best corporate fashion brands in Sydney",
            teacher: "Trần Nghĩa"
        },
    ]
    return(
        <main class="homepage" id="main">
            <Banner />
            <CourseList 
                description="The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                has a more-or-less normal" 
                name = "Khóa học Offline"
                list = {list}
            />
            <CourseList name = "Khóa học Online" list = {list}/>
            <SpecialThing />
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
            <Carousel />
            <CarouselBottom />
            <section class="section-action">
                <div class="container">
                    <h3>Bạn đã sẵn sàng trở thành chiến binh tiếp theo của Team CFD chưa?</h3>
                    <div class="btn main round bg-white">Đăng ký</div>
                </div>
            </section>
        </main>
    )
}