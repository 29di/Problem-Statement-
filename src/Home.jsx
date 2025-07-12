import { useEffect, useState } from 'react';
import axios from 'axios';
import QuestionCard from '../components/QuestionCard'; // ✅ Correct import path

const Home = () => {
  const [questions, setQuestions] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('newest');

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/questions`);
        setQuestions(res.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    fetchQuestions();
  }, []);

  const filtered = questions
    .filter(q => q.title.toLowerCase().includes(search.toLowerCase()))
    .filter(q => (filter === 'unanswered' ? q.answers?.length === 0 : true));

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">All Questions</h1>

      <input
        type="text"
        placeholder="Search questions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 px-4 py-2 rounded w-full mb-4"
      />

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setFilter('newest')}
          className={`px-3 py-1 rounded ${filter === 'newest' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Newest
        </button>
        <button
          onClick={() => setFilter('unanswered')}
          className={`px-3 py-1 rounded ${filter === 'unanswered' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Unanswered
        </button>
      </div>

      {filtered.length > 0 ? (
        filtered.map((q) => (
          <QuestionCard key={q._id} question={q} />
        ))
      ) : (
        <p className="text-gray-500">No questions found.</p>
      )}
    </div>
  );
};

export default Home;
