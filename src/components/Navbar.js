import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { NavbarData } from "./NavbarData";
import { getMoviesAndShowsBySearch } from "../redux/actions/movieAction";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [keyword, setKeyword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const showSidebar = () => setSidebar(!sidebar);

  const handleChangeSearch = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    dispatch(getMoviesAndShowsBySearch(keyword));
    history.push("/search-page");
  };

  return (
    <>
      <span className="navbar">
        <span className="bar-icon">
          <FaBars onClick={showSidebar} />
        </span>
      </span>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <span className="bar-icon" onClick={showSidebar}>
          <AiOutlineClose />
        </span>
        {NavbarData.map((item) => (
          <span className="routes">
            <Link to={item.path}>{item.title}</Link>
          </span>
        ))}
        <form className="search-bar" onSubmit={handleSubmitSearch}>
          <FiSearch />
          <input
            type="search"
            required={true}
            placeholder="Search Movies and Shows..."
            value={keyword}
            onChange={handleChangeSearch}
          />
        </form>
      </nav>
    </>
  );
}

export default Navbar;
