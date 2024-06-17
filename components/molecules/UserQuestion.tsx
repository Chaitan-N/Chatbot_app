import React from 'react';
import UserAvatar from '../atoms/UserAvatar';
import UserTextBox from '../atoms/UserTextBox';

interface UserQuestionProps {
    avatarUrl: string;
    question: string;
}

const UserQuestion: React.FC<UserQuestionProps> = ({ avatarUrl, question }) => {
    return (
        <div className='flex'>
            <UserAvatar imageUrl={avatarUrl} />
            <UserTextBox text={question} />
        </div>
    );
};

export default UserQuestion;
