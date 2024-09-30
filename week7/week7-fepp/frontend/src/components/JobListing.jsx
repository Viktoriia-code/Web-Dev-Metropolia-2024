import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const JobListing = ({job}) => {
  return (
    <div className="job-preview">
      <Link to={`/jobs/${job.id}`}><h2>{job.title}</h2></Link>
      <p>Type: {job.type}</p>
      <p>Description: {job.description}</p>
      <p>Company: {job.company.name}</p>
    </div>
  );
};

JobListing.propTypes = {
  job: 
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      type: PropTypes.string,
      description: PropTypes.string,
      company: PropTypes.shape({
        name: PropTypes.string,
      })
    })
};

export default JobListing;
