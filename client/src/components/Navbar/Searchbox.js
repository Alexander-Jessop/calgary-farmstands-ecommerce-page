import React, { useState } from "react";
import styled from "styled-components";
const Search = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Searchbox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const updateSearchTerm = (event) => {
    let newValue = event.target.value;
    setSearchTerm(newValue);
  };
  const setSearch = (e) => {
    alert(`Location:${searchTerm}`);
  };

  return (
    <Search>
      <form onChange={setSearch}>
        <input
          id="global-search-input"
          name="q"
          className="form-control search-box-input ui-autocomplete-input"
          type="text"
          placeholder="search Farmstand.ca"
          autoComplete="off"
          value={searchTerm}
          onChange={updateSearchTerm}
        />
      </form>
    </Search>
  );
};

export default Searchbox;
