import React from 'react';

interface BotTextBoxProps {
    text: string;
}

const BotTextBox: React.FC<BotTextBoxProps> = ({ text }) => {
    return <div className=' w-auto max-w-2xl h-auto rounded-lg bg-blue-100 px-3 align-middle overflow-hidden p-3'>{text}</div>;
};

export default BotTextBox;
