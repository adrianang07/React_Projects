import "./StudentList.css"
function StudentList(props) {
    return (
        <ul class="student_list_section">
            <h3>Active Students</h3>
            <li>
                {props.name1}
            </li>
            <li>
                {props.name2}
            </li>
            <li>
                {props.name3}
            </li>
        </ul>
    );
}

export default StudentList;