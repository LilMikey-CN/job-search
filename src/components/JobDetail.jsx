import { Card as AntdCard, Divider } from 'antd';

export default function JobDetail({ jobTitle, jobDetails, fullJobDescription }) {

  return (
    <AntdCard
      title={jobTitle}
      variant="borderless"
      style={{
        width: "100%",
      }}
    >
      <p className='text-sm font-light'>{jobDetails}</p>
      <Divider />
      <p className='mt-6'>{fullJobDescription}</p>
    </AntdCard>
  );
}
