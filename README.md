# Job Candidate Search Application

## Table of Contents

1. Description
2. Technologies Used
3. Features
4. Installation
5. Usage
6. LocalStorage Integration
7. Future Enhancements
8. License

## Description

The Job Candidate Search Application is a React-based web application that helps users search for GitHub users and save potential candidates for future reference. Users can search for GitHub profiles, view detailed information about candidates, and save their profiles locally using browser localStorage. The application allows users to navigate to a "Saved Candidates" page to review their shortlisted candidates.

## Technologies Used

1. React: For building the user interface.
2. TypeScript: For static typing and better development practices.
4. React Router: For client-side routing.
5. GitHub API: To fetch candidate information.
6. CSS: For styling the application.
7. LocalStorage: To persist saved candidates across browser sessions.

## Features

1. GitHub User Search: Allows users to search for GitHub profiles by username.
2. Candidate Details: Displays information such as name, username, email, location, company, and a link to the GitHub profile.
3. Save Candidates: Enables users to save profiles for later reference.
4. Saved Candidates Page: A dedicated page for viewing all saved candidates, persisted using localStorage.
5. Responsive Design: Ensures the application works on devices of different sizes.

## Installation

### Prerequisites
    - Node.js (v16 or higher)
    - npm (v7 or higher)

### Steps

1. Clone the repository:

git clone <repository-url>
cd job-candidate-search-app

2. Install dependencies:

npm install

3. Start the development server:

npm run dev

4. Open the application in your browser at:

http://localhost:5173

## Usage

### Searching for Candidates

1. Navigate to the homepage.
2. Enter a GitHub username in the search bar.
3. View the list of GitHub profiles that match your search.

### Saving Candidates

1. Click the "Save" button on a candidate's profile to save it.
2. Saved candidates will be stored in the browser's localStorage.

### Viewing Saved Candidates 
(WARNING: Saved Candidates page not finished. Saved candidates also show up at the bottom of the Search Page.)

1. Click the "Saved Candidates" link in the navigation menu.
2. View a list of all saved candidates along with their profile details.

## LocalStorage Integration

### Overview

The application uses the browser's localStorage API to persist saved candidates. This ensures that the list of saved candidates is not lost when the page is refreshed or the browser is closed.

### Key Functions

1. Saving Candidates:
    - Candidates are saved to localStorage when the "Save" button is clicked.
2. Loading Saved Candidates:
    - On the "Saved Candidates" page, candidates are loaded from localStorage when the component mounts.

## Future Enhancements

1. Authentication: Add user authentication to allow multiple users to save their own lists.
2. Database Integration: Replace localStorage with a backend database for better scalability.
3. Filtering and Sorting: Add features to filter and sort saved candidates by name, location, or company.
4. Profile Comparison: Implement a feature to compare multiple saved profiles side by side.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the terms of the license.

## Acknowledgments

- GitHub API for providing user data.
- React Router for seamless navigation.
- TypeScript for improving code quality.

Thank you for using the Job Candidate Search Application! Happy searching!