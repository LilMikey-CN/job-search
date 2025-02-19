import { Card } from 'antd';

export default function JobCard({ jobTitle, companyName, jobDescription }) {

  return (
    <Card
      hoverable
      title={jobTitle}
      variant="borderless"
      style={{
        width: "100%",
      }}
    >
      <p className='text-sm font-light'>{companyName}</p>
      <p className='mt-6'>{jobDescription}</p>
    </Card>
  );
}
