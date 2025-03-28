import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../Utils/constant";
import { cacheResults } from "../Utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col p-2 my-2 mr-0 shadow-lg items-center">
      <div className="flex col-span-1 items-center">
        <img
          className="h-8 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png"
          alt="hamburger menu"
          onClick={handleToggleMenu}
        ></img>
        <img
          className="h-12"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          alt="youtubelogo"
        ></img>
      </div>

      <div className="col-span-10 pl-40">
        <div>
          <input
            type="text"
            className="w-1/2 border-2 border-r-gray-400 py-2 px-5 rounded-full rounded-r-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          ></input>
          <button className="border border-gray-400 py-2 px-5 bg-gray-200 rounded-full border-l-0 rounded-l-none">
            🔍
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed  bg-white shadow-lg w-[33.7%] py-2 px-5 rounded-lg">
            <ul>
              {suggestions.map((suggestion) => (
                <li className="mb-2">{suggestion}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
          alt="user icon"
        ></img>
      </div>
    </div>
  );
};

export default Header;
