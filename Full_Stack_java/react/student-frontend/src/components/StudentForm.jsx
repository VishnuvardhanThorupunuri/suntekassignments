import { useState } from "react";
import StudentService from "../services/StudentService";

function StudentForm({ refresh }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitStudent = (e) => {
    e.preventDefault();
    StudentService.addStudent({ name, email })
      .then(() => {
        setName("");
        setEmail("");
        refresh();
      });
  };

  return (
    <form onSubmit={submitStudent}>
      <input
        type="text"
placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button>Add Student</button>
    </form>
  );
}

export default StudentForm;
