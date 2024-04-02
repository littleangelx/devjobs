import Button from "../components/Button";

function MoreJobDetails({ item }) {
  return (
    <div className="more-job-info">
      <section className="job-details job-details-more">
        <span>{item.postedAt}</span>
        <div className="circle-container">
          <div className="circle" />
        </div>
        <span>{item.contract}</span>
      </section>
      <div className="job-title">{item.position}</div>
      <div className="job-country">{item.location}</div>
      <Button>Apply Now</Button>
      <p>{item.description}</p>
      <h2>Requirements</h2>
      <p>{item.requirements.content}</p>
      <ul>
        {item.requirements.items.map((item) => (
          <li>
            <p>{item}</p>
          </li>
        ))}
      </ul>
      <h2>What You Will Do</h2>
      <p>{item.role.content}</p>
      <ol>
        {item.role.items.map((item) => (
          <li>
            <p>{item}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default MoreJobDetails;
