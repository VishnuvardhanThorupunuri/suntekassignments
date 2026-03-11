function ClickEvent() {
  function showMessage() {
    alert("Hello Anurag")
  }
  function show(name){
    alert("Hello"+name)
  }

  return (
    <>
    <button onClick={showMessage}>click Me</button>
    <button onClick={()=>showMessage("Vishnu")}>Click</button>
    </>
  );
}

export default ClickEvent;


