import React, { useState } from "react";

const Searchbox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const updateSearchTerm = (event) => {
    let newValue = event.target.value;
    setSearchTerm(newValue);
  };
  console.log(searchTerm);
  return (
    <div>
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
    </div>
  );
};

export default Searchbox;
