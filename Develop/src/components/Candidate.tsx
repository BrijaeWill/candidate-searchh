import React from 'react';
import CandidateInterface from '../interfaces/Candidate.interface';

interface CandidateProps {
    candidate: CandidateInterface;
  }
 const Candidate: React.FC<CandidateProps> =({candidate}) =>{
 return(
    <div>
        <h2>{candidate.name || 'No Name Provided'}</h2>
        <img src={candidate.avatar_url} alt={`${candidate.login}'s avatar`}/>
        <p>Company: {candidate.company || 'N/A'}</p>
        <p>Location: {candidate.location || 'N/A'}</p>
        <p>Bio: {candidate.bio || 'No Bio Available'}</p>
        <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>

    </div>
 )
 };
 export default Candidate;