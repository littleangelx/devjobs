import { useNavigate } from "react-router-dom";

const Card = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/job/${job.id}`)}>
      <div>
        <img src={job.logo} />

        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}
        >
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <p>{job.postedAt}</p> <div className="dot" />
            <p>{job.contract}</p>
          </div>
          <h3>{job.position}</h3>
          <p>{job.company}</p>
        </div>
      </div>
      <p className="location">{job.location}</p>
    </div>
  );
};

export default Card;
