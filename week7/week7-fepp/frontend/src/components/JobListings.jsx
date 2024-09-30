import JobListing from "./JobListing";
import PropTypes from 'prop-types';

const JobListings = ({ jobs }) => {
  
  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobListing key={job.id} job={job} />
      ))}
    </div>
  );
};

JobListings.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      job: PropTypes.shape({
        title: PropTypes.string,
        type: PropTypes.string,
        description: PropTypes.string,
        company: PropTypes.shape({
          name: PropTypes.string,
        })
      })
    })
  )
};

export default JobListings;
