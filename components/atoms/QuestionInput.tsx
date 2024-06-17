import React, { useState } from 'react';

interface QuestionInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const QuestionInput: React.FC<QuestionInputProps> = ({ value, onChange }) => {
    return (
        <div>   
            <input
            className='border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent w-96 h-10 rounded-lg bg-blue-100 px-4 '
            type="text"
            value={value}
            onChange={onChange}
            placeholder="    Ask a question..."
            
        />
        
        </div>
    );
};

export default QuestionInput;
