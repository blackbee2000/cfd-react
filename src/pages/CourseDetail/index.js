import BannerDetail from "./components/BannerDetail";
import Content from "./components/Content";
import { CourseList } from "../../components";

export default function CourseDetail(){
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
    ]
    return(
        <main class="course-detail" id="main">
            <BannerDetail />
            <Content />
            <CourseList 
                smallTitle = "DỰ ÁN"
                name = "THÀNH VIÊN"
                list = {list}
            />
            <CourseList 
                smallTitle = "KHÓA HỌC"
                name = "LIÊN QUAN"
                list = {list}
            />
        </main>
    )
}