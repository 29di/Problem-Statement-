import { useParams } from 'react-router-dom';

const QuestionDetails = () => {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Question ID: {id}</h1>
      <p>This is a placeholder. Team 1 will update this.</p>
    </div>
  );
};

export default QuestionDetails;
