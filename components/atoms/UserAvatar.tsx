import React from 'react';

interface AvatarProps {
  imageUrl: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl }) => {
  return <img src={imageUrl} alt="Userlogo" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />;
};

export default Avatar;
