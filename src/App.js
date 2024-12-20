import React, { useState, useEffect } from 'react';
import ReviewList from './components/ReviewList';
import SearchBox from './components/SearchBox';
import './App.css';

function App() {
  const [reviews, setReviews] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/cochrane_reviews.json');
        const data = await response.json();
        const flattenedData = data.flat();
        setReviews(flattenedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="App">
      <h1>Cochrane Reviews</h1>
      <SearchBox 
        reviews={reviews}
        onTopicSelect={handleTopicSelect}
      />
      <ReviewList 
        reviews={reviews}
        selectedTopic={selectedTopic}
      />
    </div>
  );
}

export default App;
