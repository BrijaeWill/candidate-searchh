// TODO: Create an interface for the Candidate objects returned by the API
interface CandidateInterface {
  name: string;
  avatar_url: string;
  login: string;
  company: string;
  location:string;
  bio: string;
  html_url:string;
  email: string;
  }
  export default CandidateInterface;