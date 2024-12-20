import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './ReviewList.css';

const ReviewList = ({ reviews, selectedTopic }) => {
  const filteredReviews = selectedTopic
    ? reviews.filter(review => review.topic === selectedTopic)
    : reviews;

  const itemsPerPage = 10;
  const [displayedItems, setDisplayedItems] = React.useState(itemsPerPage);

  const loadMore = () => {
    setDisplayedItems(prev => prev + itemsPerPage);
  };

  const hasMore = displayedItems < filteredReviews.length;

  return (
    <div className="review-list">
      <InfiniteScroll
        dataLength={Math.min(displayedItems, filteredReviews.length)}
        next={loadMore}
        hasMore={hasMore}
        loader={<h4>Loading more reviews...</h4>}
      >
        {filteredReviews.slice(0, displayedItems).map((review, index) => (
          <div key={index} className="review-item">
            <h3>
              <a href={review.url} target="_blank" rel="noopener noreferrer">
                {review.title}
              </a>
            </h3>
            <p><strong>Author:</strong> {review.author}</p>
            <p><strong>Topic:</strong> {review.topic}</p>
            <p className="date"><strong>Date:</strong> {review.date}</p>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default ReviewList;
