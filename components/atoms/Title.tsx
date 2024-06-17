import React from 'react';

interface TitleProps {
    color: string;
    text: string;
}

const Title: React.FC<TitleProps> = ({ color, text }) => {

    return <div className=" flex items-center justify-center text-3xl" style={{ color }}>{text}</div>;
};

export default Title;
