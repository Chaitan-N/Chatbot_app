import React from 'react';

interface UserTextBoxProps {
    text: string;
}

const UserTextBox: React.FC<UserTextBoxProps> = ({ text }) => {
    return <div className='w-auto max-w-xl h-auto rounded-lg bg-blue-100 px-3 align-middle overflow-hidden p-3'>{text}</div>;
};

export default UserTextBox;
