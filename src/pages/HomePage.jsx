import JobCard from "../components/JobCard";
import JobDetail from "../components/JobDetail";

import { useEffect, useState } from "react";
import { fetchJobs } from "../apis/jobs";

import PageLayout from "../layout/Page.layout";

export default function HomePage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs().then(setJobs);
  }, []);

  return (
    <PageLayout
      cards={jobs.map((job, index) => (
        <JobCard
          key={index}
          jobTitle={job.jobTitle} // Ensure correct property names
          companyName={job.companyName}
          jobDescription={job.jobDescription}
        />
      ))}
      detail={
        <JobDetail
          jobTitle="Frontend Developer"
          jobDetails="Tech Innovators Inc."
          fullJobDescription="Develop and maintain web applications using React.js and modern frontend technologies."
        />
      }
    />
  )
}
