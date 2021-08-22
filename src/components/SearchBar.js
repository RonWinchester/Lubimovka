import React from "react";

function SearchBar({title, onSearch }) {
  const [search, setSearch] = React.useState("");

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    search.toString().toLowerCase();
    onSearch(search);
  }

  return (
    <div className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="searchbar__title">{title}</h1>
        <div className="searchbar__component">
          <input
            onChange={handleSearchChange}
            type="text"
            placeholder="Август"
            className="searchbar__input"
            name="text"
            value={search}
          ></input>
          <button
            className="searchbar__button"
            type="submit"
            onClick={handleSubmit}
            disabled = { search ? false : true}
          >
            ИСКАТЬ
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
