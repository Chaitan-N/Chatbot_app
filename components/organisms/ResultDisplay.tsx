import React from 'react';
import UserQuestion from '../molecules/UserQuestion';
import BotResponse from '../molecules/BotResponse';


interface ResultDisplayProps {
    userAvatarUrl: string;
    botAvatarUrl: string;
    userQuestion: string;
    botResponse: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({
    userAvatarUrl,
    botAvatarUrl,
    userQuestion,
    botResponse,
}) => {
    return (
    <div className="w-[840px] h-[700px] border-gray-600 border-2 p-4 rounded-xl overflow-y-scroll">
      <div className="flex flex-col">
        <div className="flex justify-start">
          <UserQuestion avatarUrl={userAvatarUrl} question={userQuestion} />
        </div>
        <div className="flex justify-end mt-5">
          <BotResponse avatarUrl={botAvatarUrl} response={botResponse} />
        </div>
      </div>
    </div>
    );
};

export default ResultDisplay;
