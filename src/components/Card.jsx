import { Card as AntdCard } from 'antd';

export default function Card({ jobTitle, companyName, jobDescription }) {

  return (
    <AntdCard
      title={jobTitle}
      variant="borderless"
      style={{
        width: "100%",
      }}
    >
      <p className='text-sm font-light'>{companyName}</p>
      <p className='mt-6'>{jobDescription}</p>
    </AntdCard>
  );
}
