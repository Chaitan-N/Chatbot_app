import React from 'react';
import Title from '../atoms/Title';
import QuestionInput from '../atoms/QuestionInput';
import ResultButton from '../atoms/ResultButton';

interface UserActionProps {
    titleColor: string;
    titleText: string;
    buttonTextColor: string;
    buttonText: string
    buttonBgColor: string;
    onSubmit: () => void;
    question: string;
    setQuestion: (value: string) => void;
}

const UserAction: React.FC<UserActionProps> = ({
    titleColor,
    titleText,
    buttonText,
    buttonTextColor,
    buttonBgColor,
    onSubmit,
    question,
    setQuestion,
}) => {
    return (
        <div className='flex-col'>
            <div className='flex justify-center mt-3 mr-10'>
                <Title color={titleColor} text={titleText} />
            </div>
        
            <div className='flex flex-row justify-center mt-5'>
                <QuestionInput value={question} onChange={(e) => setQuestion(e.target.value)} />
                <ResultButton textColor={buttonTextColor} bgColor={buttonBgColor} onClick={onSubmit} />
            </div>
        </div>
    );
};

export default UserAction;
