import "./Profile.css"
function Profile(props) {
    return (
        <div class="profile_card">
            <h2>Student Profile</h2>
            <p>Name: {props.name}</p>
            <p>Course: {props.coursename}</p>
            <p>Intake Year: {props.intake_year}</p>
        </div>
    );
}
export default Profile;