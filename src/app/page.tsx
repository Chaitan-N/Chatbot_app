'use client'
import React, { useState, useEffect, use } from 'react';
import UserAction from '../../components/molecules/UserAction';
import ResultDisplay from '../../components/organisms/ResultDisplay';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [eventSource, setEventSource] = useState<EventSource | null>(null);

  useEffect(() => {
    if (eventSource) {
      eventSource.onmessage = (event) => {
        setResponse((prev) => prev + event.data);
      };

      eventSource.onerror = () => {
        eventSource.close();
        setEventSource(null);
      };

      return () => {
        eventSource.close();
      };
    }
  }, [eventSource]);

  // const handleSubmit = () => {
  //   const es = new EventSource(`/api/chat?prompt=${encodeURIComponent(question)}`);

  // };
  const handleSubmit = async () => {
    try {
      const res = await fetch('/api/chat/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: question }),
      });

      if (!res.ok) {
        throw new Error(res.statusText);
      }

      const data = await res.json();
      setResponse(data.result);
    } catch (error) {
      console.error('Error fetching the OpenAI API', error);
    }
  };

  return (
    <div>
      <div className='flex justify-center'>
        <UserAction
          titleColor="#ff0000"
          titleText="Chatbot"
          buttonText="Send"
          buttonTextColor="#ffffff"
          buttonBgColor="#3377ff"
          onSubmit={handleSubmit}
          question={question}
          setQuestion={setQuestion}
        />
      </div>
      <div className='flex justify-center mt-10'>
        <ResultDisplay
          userAvatarUrl="/user.jpg"
          userQuestion={question}
          botAvatarUrl="/chatbot.jpg"
          // botResponse={"This is openAI result. dffdfadfadfadfdddhdhduiwhdiuhdhwhdiuwhiuiuiuiu"}
          botResponse={response}
        />
      </div>
    </div>
  );
};

export default Home;
