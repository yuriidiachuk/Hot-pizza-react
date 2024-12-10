import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 text-sm transition-all duration-300 bg-yellow-100 rounded-full focus:ring focus:outline-none focus:ring-yellow-500 sm:focus:w-72 sm:w-64 placeholder:text-stone-400 w-28 plac"
      />
    </form>
  );
}

export default SearchOrder;
