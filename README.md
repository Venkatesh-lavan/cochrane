# Cochrane Reviews Application

A React-based single-page application for visualizing and searching Cochrane Library reviews with infinite scrolling and topic-based filtering capabilities.

## Features

- Display Cochrane reviews with infinite scroll functionality
- Search reviews by topic with auto-suggestions in blue
- Purple-themed search interface (#962d91)
- Responsive design for different screen sizes
- Topic-based filtering
- Hyperlinked review titles

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v16 or higher)
- npm (v8 or higher)
- Visual Studio Code (recommended IDE)

## Project Setup

1. Create a new project:
mkdir cochrane
cd cochrane
npx create-react-app 

2. Install dependencies:
npm install axios react-infinite-scroll-component
npm install web-vitals


3. Place the data file:
- Copy `cochrane_reviews.json`(Main data File) to the `public` folder

4. Create Components (1.SearchBox & 2.ReviewList ) and appropriate Styling (css)


## Development

- Use Visual Studio Code for the best development experience
- Install recommended VS Code extensions:
  - Prettier
  - React Developer Tools


## Technologies Used

- React 18
- HTML5
- CSS3
- Infinite Scroll Component
- Axios for HTTP requests


