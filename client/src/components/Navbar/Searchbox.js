import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const search = (e) => {
    if (e.key === "Enter") {
      let farmStand = farmStandData.find((stand) => {
        return stand.community.toLowerCase().includes(searchTerm.toLowerCase());
      });
      if (farmStand) {
        navigate(`/locationId/${farmStand.id}`);
      }
    }
  };
  const [farmStandData, setFarmStandData] = useState([]);
  const navigate = useNavigate();
  console.log(farmStandData);
  useEffect(() => {
    axios.get("/api").then((res) => {
      setFarmStandData(res.data);
    });
  }, []);
  return (
    <Search>
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
          onKeyUp={search}
        />
      </div>
    </Search>
  );
};

export default Searchbox;
