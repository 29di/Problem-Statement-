import { Link } from 'react-router-dom';

const QuestionCard = ({ question }) => {
  const cleanDescription = question?.description
    ? question.description.replace(/<[^>]+>/g, '').slice(0, 100)
    : '';

  return (
    <div className="border border-gray-300 p-4 mb-4 rounded shadow-sm hover:shadow-md transition">
      <h2 className="text-xl font-semibold text-blue-600">
        <Link to={`/question/${question._id}`}>{question.title}</Link>
      </h2>

      <p className="text-gray-700 mt-2">
        {cleanDescription}...
      </p>

      <p className="text-sm text-gray-500 mt-1">
        {question.answers?.length || 0} Answer(s)
      </p>
    </div>
  );
};

export default QuestionCard;
