import React from 'react';
import Statistics from './statistics.js';
import FeedbackOptions from './feedbackOptions.js';
import Section from './section.js';
import Notification from './notification.js';




class App extends React.Component {
      state = {
        feedbackCounts: {
          good: 0,
          neutral: 0,
          bad: 0,
        },
      };
  
    handleFeedbackClick = (type) => {
      this.setState((prevState) => ({
        feedbackCounts: {
          ...prevState.feedbackCounts,
          [type]: prevState.feedbackCounts[type] + 1,
        },
      }));
    };
  
    countTotalFeedback = () => {
      const { good, neutral, bad } = this.state.feedbackCounts;
      return good + neutral + bad;
    };
  
    countPositiveFeedbackPercentage = () => {
      const totalFeedback = this.countTotalFeedback();
      const { good } = this.state.feedbackCounts;
      if (totalFeedback === 0) return 0;
      return Math.round((good / totalFeedback) * 100);
    };
  
    render() {
      const feedbackOptions = ['good', 'neutral', 'bad'];
      const totalFeedback = this.countTotalFeedback();
      const positivePercentage = this.countPositiveFeedbackPercentage();
  
      return (
        <div>
          <Section title="Please leave feedback">
            <FeedbackOptions options={feedbackOptions} onLeaveFeedback={this.handleFeedbackClick} />
          </Section>
          <Section title="Statistics">
            {totalFeedback > 0 ? (
              <Statistics
                good={this.state.feedbackCounts.good}
                neutral={this.state.feedbackCounts.neutral}
                bad={this.state.feedbackCounts.bad}
                total={totalFeedback}
                positivePercentage={positivePercentage}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </div>
      );
    }
  }

  export default App;