function StudentList({ students }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th><th>Name</th><th>Email</th>
        </tr>
      </thead>
      <tbody>
        {students.map(s => (
          <tr key={s.id}>
            <td>{s.id}</td>
            <td>{s.name}</td>
            <td>{s.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentList;
