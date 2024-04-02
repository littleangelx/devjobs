import { useMediaQuery } from "react-responsive";

import Button from "./Button";
import searchIcon from "/assets/desktop/icon-search.svg";
import locationIcon from "/assets/desktop/icon-location.svg";

const FilterBar = () => {
  const isDesktop = useMediaQuery({ minWidth: 1224 });

  return (
    <div
      className="filterBar"
      style={{
        gridTemplateColumns: isDesktop ? "1.5fr 1fr 1fr" : "1fr 1fr 1.5fr",
      }}
    >
      <div className="filterOptionContainer">
        <img src={searchIcon} />
        <input
          placeholder={
            isDesktop
              ? "Filter by title, companies, expertise..."
              : "Filter by title..."
          }
        />
      </div>
      <div className="filterOptionContainer">
        <img src={locationIcon} />
        <input placeholder="Filter by location..." />
      </div>
      <div
        className="filterOptionContainer"
        style={{ justifyContent: "space-between" }}
      >
        <div className="filterOptionContainer">
          <input type="checkbox" className="filterCheckbox" />
          <p className="fullTimeText">
            {isDesktop ? "Full Time Only" : "Full Time"}
          </p>
        </div>
        <Button width={isDesktop ? "7.6875rem" : "5rem"}>Search</Button>
      </div>
    </div>
  );
};

export default FilterBar;
