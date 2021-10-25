import { CourseList } from "../../components";

export default function Course(){
    var list = [
        {
            id: "1",
            status: "end",
            person: "12",
            liked: "100",
            name: "Front-end Căn Bản",
            description: "One of the best corporate fashion brands in Sydney",
            teacher: "Trần Nghĩa"
        },
        {
            id: "2",
            status: "end",
            person: "12",
            liked: "100",
            name: "Front-end Căn Bản",
            description: "One of the best corporate fashion brands in Sydney",
            teacher: "Trần Nghĩa"
        },
        {
            id: "3",
            status: "happening",
            person: "12",
            liked: "100",
            name: "Front-end Căn Bản",
            description: "One of the best corporate fashion brands in Sydney",
            teacher: "Trần Nghĩa"
        },
        {
            id: "4",
            status: "happening",
            person: "12",
            liked: "100",
            name: "Front-end Căn Bản",
            description: "One of the best corporate fashion brands in Sydney",
            teacher: "Trần Nghĩa"
        },
        {
            id: "5",
            status: "upcoming",
            person: "12",
            liked: "100",
            name: "Front-end Căn Bản",
            description: "One of the best corporate fashion brands in Sydney",
            teacher: "Trần Nghĩa"
        },
        {
            id: "6",
            status: "upcoming",
            person: "12",
            liked: "100",
            name: "Front-end Căn Bản",
            description: "One of the best corporate fashion brands in Sydney",
            teacher: "Trần Nghĩa"
        },
    ]
    return(
        <main className="homepage" id="main">
            <CourseList
                    title="KHÓA HỌC CFD"
                    description="The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                    has a more-or-less normal" 
                    smallTitle = "Khóa học"
                    name = "ONLINE"
                    list = {list}
                />
            <CourseList
                    smallTitle = "Khóa học"
                    name = "OFFLINE"
                    list = {list}
                />
        </main>
    )
}