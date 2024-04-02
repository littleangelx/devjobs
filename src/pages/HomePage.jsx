import { useMediaQuery } from "react-responsive";

import MobileFilterBar from "../components/MobileFilterBar";
import Card from "../components/Card";
import Button from "../components/Button";
import FilterBar from "../components/FilterBar";

function HomePage() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1223 });
  const isDesktop = useMediaQuery({ minWidth: 1224 });

  const data = JSON.parse(localStorage.getItem("jobData"));

  const repeat = isMobile ? 1 : isTablet ? 2 : 3;
  const columnGap = isTablet ? "0.75rem" : isDesktop ? "1.5rem" : 0;

  return (
    <>
      {isMobile ? <MobileFilterBar /> : <FilterBar />}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${repeat}, 1fr)`,
          columnGap: columnGap,
        }}
      >
        {data.map((job) => (
          <Card key={job.id} job={job} />
        ))}
      </div>
      <div className="buttonContainer">
        <Button width="8.8125rem">Load More</Button>
      </div>
    </>
  );
}

export default HomePage;
