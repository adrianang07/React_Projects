import "./CourseInfo.css"
function CourseInfo(props) {
    return (
        <section class="course_info_card">
            <p>Course Name: {props.course_name}</p>
            <p>Duration: {props.duration}</p>
            <p>Level: {props.level} </p>
        </section>
    );

}

export default CourseInfo;