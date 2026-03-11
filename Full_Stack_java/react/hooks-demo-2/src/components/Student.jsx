import { useState } from "react";

function Student() {
  const [name, setName] = useState("vishnu vardhan");

  return (
    <div>
      <h1>Student Name: {name}</h1>
      <button onClick={() => setName("Vishnu")}>
        Change Name
      </button>
    </div>
  );
}

export default Student;
