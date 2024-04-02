function JobDetailsCard({ item }) {
  return (
    <div className="job-summary-card">
      <img src={item.logo} />
      <h1>{item.company}</h1>
      <p>{`${item.company.toLowerCase()}.com`}</p>
      <button className="company-site-button">Company Site</button>
    </div>
  );
}

export default JobDetailsCard;
