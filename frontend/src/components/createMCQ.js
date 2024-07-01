import React, { useState, useEffect } from 'react';
// import './CreateMCQ.css'; // Ensure this file contains the CSS you provided

const CreateMCQ = () => {
  const [question, setQuestion] = useState('');
  const [subject, setSubject] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [correctOptions, setCorrectOptions] = useState([]);
  const [correctOption, setCorrectOption] = useState('');

  useEffect(() => {
    const options = [option1, option2, option3, option4].filter(opt => opt);
    setCorrectOptions(options);
    setCorrectOption(''); // Clear the correct option when options change
  }, [option1, option2, option3, option4]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({
      question,
      subject,
      difficulty,
      option1,
      option2,
      option3,
      option4,
      correctOption,
    });
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Create MCQ</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="question">Question:</label>
            <textarea
              id="question"
              name="question"
              rows="4"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <select
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            >
              <option value="">Select Subject</option>
              <option value="math">Math</option>
              <option value="science">Science</option>
              <option value="history">History</option>
              <option value="geography">Geography</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="difficulty">Difficulty:</label>
            <select
              id="difficulty"
              name="difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              required
            >
              <option value="">Select Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="option1">Option 1:</label>
            <input
              type="text"
              id="option1"
              name="option1"
              value={option1}
              onChange={(e) => setOption1(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="option2">Option 2:</label>
            <input
              type="text"
              id="option2"
              name="option2"
              value={option2}
              onChange={(e) => setOption2(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="option3">Option 3:</label>
            <input
              type="text"
              id="option3"
              name="option3"
              value={option3}
              onChange={(e) => setOption3(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="option4">Option 4:</label>
            <input
              type="text"
              id="option4"
              name="option4"
              value={option4}
              onChange={(e) => setOption4(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="correctOption">Correct Option:</label>
            <select
              id="correctOption"
              name="correctOption"
              value={correctOption}
              onChange={(e) => setCorrectOption(e.target.value)}
              required
            >
              <option value="">Select Correct Option</option>
              {correctOptions.map((opt, index) => (
                <option key={index} value={opt}>{`Option ${index + 1}: ${opt}`}</option>
              ))}
            </select>
          </div>
          <button type="submit">Create MCQ</button>
        </form>
      </div>
    </div>
  );
};

export default CreateMCQ;