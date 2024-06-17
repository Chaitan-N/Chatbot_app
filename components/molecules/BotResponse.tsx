import React from 'react';
import BotAvatar from '../atoms/BotAvatar';
import BotTextBox from '../atoms/BotTextBox';

interface BotResponseProps {
    avatarUrl: string;
    response: string;
}

const BotResponse: React.FC<BotResponseProps> = ({ avatarUrl, response }) => {
    return (
        <div className='flex'>
            <BotTextBox text={response} />
            <BotAvatar imageUrl={avatarUrl} />
        </div>
    );
};

export default BotResponse;
