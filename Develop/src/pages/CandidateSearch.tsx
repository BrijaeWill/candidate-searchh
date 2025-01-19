import { useEffect, useState } from 'react';
import { searchGithub } from '../api/API';
import Candidate from '../../src/interfaces/Candidate.interface';


const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCandidates = async () => {
      const userData = await searchGithub();
      if (userData && userData.length > 0) {
        setCandidates(userData);
      } else {
        setError('No candidates available');
      }
      setLoading(false);
    };

    fetchCandidates();
  }, []);

  const handleSaveCandidate = () => {
    const candidateToSave = candidates[currentIndex];
    if (candidateToSave) {
      const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      localStorage.setItem('savedCandidates', JSON.stringify([...savedCandidates, candidateToSave]));
      handleNextCandidate();
    }
  };

  const handleNextCandidate = () => {
    if (currentIndex < candidates.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setError('No more candidates available');
    }
  };

  const handlePreviousCandidate = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      {loading ? (
        <p>Loading candidates...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <div>
          <h2>{candidates[currentIndex]?.login}</h2>
          <img src={candidates[currentIndex]?.avatar_url} alt={candidates[currentIndex]?.login} width="100" />
          <p>Location: {candidates[currentIndex]?.location || 'N/A'}</p>
          <p>Email: {candidates[currentIndex]?.email || 'N/A'}</p>
          <p>
            <a href={candidates[currentIndex]?.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </p>
          <p>Company: {candidates[currentIndex]?.company || 'N/A'}</p>
          <button onClick={handleSaveCandidate}>+</button>
          <button onClick={handlePreviousCandidate}>-</button>
          <button onClick={handleNextCandidate}>Next Candidate</button>
        </div>
      )}
    </div>
  );
};
export default CandidateSearch;