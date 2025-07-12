import React, { useState, useEffect } from 'react';
import QuestionCard from '../components/QuestionCard';

const mockQuestions = [
  {
    _id: '1',
    title: 'How to center a div using Tailwind?',
    description: '<p>Use flex justify-center items-center.</p>',
    tags: ['CSS', 'Tailwind'],
    createdAt: '2025-07-12T08:00:00Z'
  },
  {
    _id: '2',
    title: 'What is the difference between let and var in JS?',
    description: '<p>Let is block-scoped, var is function-scoped.</p>',
    tags: ['JavaScript', 'Variables'],
    createdAt: '2025-07-11T10:00:00Z'
  }
];

const Home = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Load dummy questions
    setQuestions(mockQuestions);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Questions</h1>
      <div className="space-y-4">
        {questions.map((q) => (
          <QuestionCard key={q._id} question={q} />
        ))}
      </div>
    </div>
  );
};

export default Home;
