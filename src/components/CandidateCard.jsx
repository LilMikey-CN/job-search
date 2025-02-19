// Card to display succinct candidate information

import { Avatar, Card } from 'antd';

const { Meta } = Card;

export default function CandidateCard({ avatarURL, name, location, advantages, education }) {

  const seed = Math.floor(Math.random() * 1000);

  return (
    <Card
      hoverable
      variant="borderless"
      style={{
        width: "100%",
      }}
    >
      <Meta
        avatar={<Avatar src={avatarURL || `https://api.dicebear.com/7.x/miniavs/svg?seed=${seed}`} />}
        title={name}
        description={location}
      />
      <p className='mt-5'>{education}</p>
      <p className='text-sm font-light mt-3'>{advantages}</p>
    </Card>
  );
}
