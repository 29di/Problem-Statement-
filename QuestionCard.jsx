import React from 'react';

const QuestionCard = ({ question }) => {
  const { title, description, tags } = question;

  return (
    <div className="border border-gray-300 rounded-xl p-4 hover:shadow-md transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div
        className="text-gray-700 text-sm mb-3"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
