import axios from "axios";

const BASE_URL = "http://localhost:8080/api/students";

class StudentService {
  getAllStudents() {
    return axios.get(BASE_URL);
  }

  addStudent(student) {
    return axios.post(BASE_URL, student);
  }
}

export default new StudentService();
