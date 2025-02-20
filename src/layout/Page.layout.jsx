
import { Flex, Input, Space } from 'antd';
const { Search } = Input;

export default function PageLayout({ cards, detail }) {

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

      <div className="canvas flex flex-col items-center mt-6 md:flex-row md:p-4 w-full max-w-screen-xl mx-auto ">

        {/* Card Wrapper - Centers content on large screens */}
        <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto">

          {/* Left Section - Card Area */}
          <div className="cardarea p-1 w-full md:w-4/9 md:p-4 bg-inherit rounded-lg overflow-y-auto">
            {/* Cards will be placed here */}
            <Space direction="vertical">
              {cards}
            </Space>
          </div>

          {/* Right Section - Card Details */}
          <div className="carddetail hidden md:block w-5/9 bg-gray-50 rounded-lg shadow-md ">
            {/* Selected card details will be displayed here for large screen*/}
            {detail}
          </div>

        </div>

      </div>
    </>
  )
}
