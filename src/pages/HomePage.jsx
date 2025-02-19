import Card from "../components/Card";
import CardDetail from "../components/CardDetail";

import { Flex, Input, Space } from 'antd';
const { Search } = Input;

import { useEffect, useState } from "react";
import { fetchJobs } from "../apis/jobs";

export default function HomePage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs().then(setJobs);
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
              {jobs.map((job, index) => (
                <Card
                  key={index}
                  jobTitle={job.jobTitle}
                  companyName={job.companyName}
                  jobDescription={job.jobDescription}
                />
              ))}
            </Space>
          </div>

          {/* Right Section - Card Details */}
          <div className="carddetail w-3/5 bg-inherit rounded-lg p-2">
            {/* Selected card details will be displayed here */}
            <CardDetail
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
