import React from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

interface SavedCandidatesProps {
  savedCandidates: Candidate[];
}

const SavedCandidatesComponent: React.FC<SavedCandidatesProps> = ({
  savedCandidates,
}) => {
  return (
    <div>
      <h1>Potential Candidates</h1>
      {savedCandidates.length > 0 ? (
        <ul>
          {savedCandidates.map((candidate) => (
            <li key={candidate.id}>
              <img
                src={candidate.avatar_url}
                alt={candidate.login}
                style={{ width: '50px', borderRadius: '50%' }}
              />
              <p>Name: {candidate.name || 'N/A'}</p>
              <p>Username: {candidate.login}</p>
              <p>Location: {candidate.location || 'N/A'}</p>
              <p>Email: {candidate.email || 'N/A'}</p>
              <p>Company: {candidate.company || 'N/A'}</p>
              <a href={candidate.html_url} target="_blank" rel="noreferrer">
                GitHub Profile
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No candidates have been saved yet.</p>
      )}
    </div>
  );
};

export default SavedCandidatesComponent;
