import { useParams } from "react-router-dom";

import data from "../assets/data.json";
import Header from "../components/Header";
import JobDetailsCard from "../components/JobDetailsCard";
import MoreJobDetails from "../components/MoreJobDetails";
import JobFooter from "../components/JobFooter";

function DetailsPage() {
  const { jobId } = useParams();

  const jobDetails = data.find((job) => job.id === parseInt(jobId));

  return (
    <div>
      <Header />
      <div className="job-details-container">
        <JobDetailsCard item={jobDetails} />
        <MoreJobDetails item={jobDetails} />
      </div>
      <JobFooter />
    </div>
  );
}

export default DetailsPage;
