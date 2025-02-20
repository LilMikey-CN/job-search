import CandidateCard from "../components/CandidateCard";
import JobDetail from "../components/JobDetail";

import { useEffect, useState } from "react";
import { fetchCandidates } from "../apis/candidates";
import PageLayout from "../layout/Page.layout";

export default function HomePage() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetchCandidates().then(setCandidates);
  }, []);

  return (
    <PageLayout
      cards={
        candidates.map((candidate, index) => (
          <CandidateCard
            key={index}
            avatarURL={candidate.avatarURL}
            name={candidate.name}
            location={candidate.location}
            advantages={candidate.advantages}
            education={candidate.education}
          />
        ))
      }
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



