import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CourseList } from "../../components";
import { fetchListCourseAction } from "../../store/action/courseAction";

export default function Course(){
    
    let dispatch = useDispatch();
    const {offline, online} = useSelector(state => state.course);

    useEffect(() =>{
        if(!offline){
            dispatch(fetchListCourseAction());
        }
    }, []);

    return(
        <main className="homepage" id="main">
            <CourseList
                    title="KHÓA HỌC CFD"
                    description="The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                    has a more-or-less normal" 
                    smallTitle = "Khóa học"
                    name = "ONLINE"
                    list = {online}
                />
            <CourseList
                    smallTitle = "Khóa học"
                    name = "OFFLINE"
                    list = {offline}
                />
        </main>
    )
}