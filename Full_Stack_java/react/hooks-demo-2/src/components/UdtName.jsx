import { useState } from 'react';

function UdtName(props) {
  const [status, setStatus] = useState("offline");

  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
      <p>Status: {status}</p>

      <button onClick={() => setStatus("online")}>Go Online</button>
      <button onClick={() => setStatus("offline")}>Go Offline</button>
    </div>
  );
}

export default UdtName;
