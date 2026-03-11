import { useEffect, useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import StudentService from "./services/StudentService";

function App() {
  const [students, setStudents] = useState([]);

  const loadStudents = () => {
    StudentService.getAllStudents()
      .then(res => setStudents(res.data));
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <>
      <h2>Student Management</h2>
      <StudentForm refresh={loadStudents} />
      <StudentList students={students} />
    </>
  );
}

export default App;
