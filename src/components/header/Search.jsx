import { useContext, useState } from "react";
import SearchLogo from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { getLocationsByName } from "../../data/locationData";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const { setSelectedLocation } = useContext(LocationContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const fetchedLocation = getLocationsByName(searchTerm);

    setSelectedLocation({ ...fetchedLocation });
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          onChange={(e) => setSearchTerm(e.target.value)}
          required
        />
        <button type="submit">
          <img src={SearchLogo} />
        </button>
      </div>
    </form>
  );
}

export default Search;
