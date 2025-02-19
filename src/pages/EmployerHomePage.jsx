import CandidateCard from "../components/CandidateCard";
import JobDetail from "../components/JobDetail";

import { Flex, Input, Space } from 'antd';
const { Search } = Input;

import { useEffect, useState } from "react";
import { fetchCandidates } from "../apis/candidates";

export default function HomePage() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetchCandidates().then(setCandidates);
  }, []);

  return (
    <>
      <Flex justify="center">
        <Search
          style={{
            width: '100%',
            maxWidth: '600px',
            margin: '0 auto',
            marginTop: '20px',
            marginBottom: '20px'
          }}
          placeholder="Keywords, job title or company"
          enterButton="Find Jobs"
          size="large"
          onSearch={value => console.log(value)}
        />
      </Flex>

      <div className="flex justify-center items-center bg-gray-100 mt-4">
        <div className="canvas flex flex-col md:flex-row gap-3 bg-inherit p-3 rounded-lg w-full max-w-screen-lg">
          {/* Left Section - Card Area */}
          <div className="cardarea w-full md:w-2/5 bg-inherit rounded-lg p-2 overflow-y-auto">
            {/* Cards will be placed here */}
            <Space direction="vertical">
              {candidates.map((candidate, index) => (
                <CandidateCard
                  key={index}
                  avatarURL={candidate.avatarURL}
                  name={candidate.name}
                  location={candidate.location}
                  advantages={candidate.advantages}
                  education={candidate.education}
                />
              ))}
            </Space>
          </div>

          {/* Right Section - Card Details */}
          <div className="carddetail w-3/5 bg-gray-50 rounded-lg shadow-md ">
            {/* Selected card details will be displayed here */}
            <JobDetail
              jobTitle="Frontend Developer"
              jobDetails="Tech Innovators Inc."
              fullJobDescription="Develop and maintain web applications using React.js and modern frontend technologies."
            />
          </div>
        </div>
      </div>
    </>
  )
}
