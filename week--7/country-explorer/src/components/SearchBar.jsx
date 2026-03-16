import { useRef, useEffect } from "react";

function SearchBar({ onSearch }) {

  const inputRef = useRef(null);
  const timerRef = useRef(null);

  // autofocus when page loads
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {

    const value = e.target.value;

    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      onSearch(value);
    }, 500);

  };

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Search country..."
      onChange={handleChange}
      style={{
        padding: "10px",
        marginBottom: "20px",
        width: "300px"
      }}
    />
  );
}

export default SearchBar;