import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import CourseInfo from "./components/CourseInfo";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";

function App() {
  return (
    // Returns only one component at a time
    <div>
      <Header />
      <Welcome />
      <Profile name="Adrian" coursename="Web Development" intake_year="June 2025" />
      <CourseInfo course_name="Web Development" duration="4 months" level="Diploma"/>
      <StudentList name1="Adrian" name2="Joshua" name3="Michael" />
      <Footer />
    </div>
  );
}
export default App;