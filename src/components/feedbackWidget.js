/*import React, { useState } from 'react';

const FeedbackWidget = () => {
  const [feedbackCounts, setFeedbackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedbackClick = (type) => {
    setFeedbackCounts((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1,
    }));
  };

  return (
    <div>
      <h2>Give Feedback</h2>
      <div>
        <button onClick={() => handleFeedbackClick('good')}>Good</button>
        <button onClick={() => handleFeedbackClick('neutral')}>Neutral</button>
        <button onClick={() => handleFeedbackClick('bad')}>Bad</button>
      </div>
      <h2>Feedback Statistics</h2>
      <p>Good: {feedbackCounts.good}</p>
      <p>Neutral: {feedbackCounts.neutral}</p>
      <p>Bad: {feedbackCounts.bad}</p>
    </div>
  );
};

export default FeedbackWidget;
*/