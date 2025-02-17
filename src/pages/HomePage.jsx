import Card from "../components/Card";
import CardDetail from "../components/CardDetail";
import MyLayout from "../components/MyLayout";

import { Flex, Input, Space } from 'antd';
const { Search } = Input;

export default function HomePage() {
  return (
    <>
      <MyLayout>
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

        <div className="flex justify-center items-center bg-gray-100 p-6">
          <div className="canvas flex gap-6 bg-white p-6 shadow-lg rounded-lg w-full max-w-screen-lg">
            {/* Left Section - Card Area */}
            <div className="cardarea w-2/5 bg-gray-200 rounded-lg shadow-md p-3 overflow-y-auto">
              {/* Cards will be placed here */}
              <Space direction="vertical">
                <Card
                  jobTitle="Frontend Developer"
                  companyName="Tech Innovators Inc."
                  jobDescription="Develop and maintain web applications using React.js and modern frontend technologies."
                />
                <Card
                  jobTitle="Data Analyst"
                  companyName="Global Insights Ltd."
                  jobDescription="Analyze large datasets to provide business intelligence and drive decision-making."
                />
                <Card
                  jobTitle="Software Engineer"
                  companyName="NextGen Solutions"
                  jobDescription="Design and implement scalable backend systems using Node.js and cloud services."
                />
              </Space>
            </div>

            {/* Right Section - Card Details */}
            <div className="carddetail w-3/5 bg-gray-50 rounded-lg shadow-md p-3">
              {/* Selected card details will be displayed here */}
              <CardDetail
                jobTitle="Frontend Developer"
                jobDetails="Tech Innovators Inc."
                fullJobDescription="Develop and maintain web applications using React.js and modern frontend technologies."
              />
            </div>
          </div>
        </div>
      </MyLayout>
    </>
  )
}
