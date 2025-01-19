import { useEffect, useState } from 'react';
import Candidate from '../../src/interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('savedCandidates');
    if (saved) {
      setSavedCandidates(JSON.parse(saved));
    }
  }, []);

  return (
    <>
      <h1>Potential Candidates</h1>
      {savedCandidates.length > 0 ? (
        <ul>
          {savedCandidates.map((candidate, index) => (
            <li key={index}>
              <h4>{candidate.login}</h4>
              <p>Location: {candidate.location || 'N/A'}</p>
              <p>
                <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No candidates have been accepted.</p>
      )}
    </>
  );
};

export default SavedCandidates;