import React, { useState, useEffect } from 'react';
import './SearchBox.css';

const SearchBox = ({ reviews, onTopicSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [uniqueTopics, setUniqueTopics] = useState([]);

  useEffect(() => {
    if (reviews && reviews.length > 0) {
      const topics = [...new Set(reviews.map(review => review.topic))].sort();
      setUniqueTopics(topics);
    }
  }, [reviews]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim()) {
      const filteredTopics = uniqueTopics.filter(topic =>
        topic.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredTopics);
    } else {
      setSuggestions([]);
    }
  };

  const handleTopicSelect = (topic) => {
    setSearchTerm(topic);
    onTopicSelect(topic);
    setSuggestions([]);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by topic..."
        value={searchTerm}
        onChange={handleInputChange}
        className="search-input"
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((topic, index) => (
            <li
              key={index}
              onClick={() => handleTopicSelect(topic)}
              className="suggestion-item"
            >
              {topic}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
