import React from 'react';

interface ResultButtonProps {
    textColor: string;
    bgColor: string;
    onClick: () => void;
}

const ResultButton: React.FC<ResultButtonProps> = ({ textColor, bgColor, onClick }) => {
    


    
    return (
        <button
            className="bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 rounded-lg w-20 h-8 mt-1 mx-3"
            style={{ color: textColor, backgroundColor: bgColor }}
            onClick={onClick}
        >
            Send
        </button>
    );
};

export default ResultButton;
