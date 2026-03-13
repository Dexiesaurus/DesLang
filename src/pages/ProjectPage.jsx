import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

function ProjectPage() {
  const { id } = useParams();

  return (
    <div className="site-wrapper">
      <NavBar />
      <main className="content-section" style={{paddingTop: '150px', textAlign: 'center'}}>
        <h1 className="display-name" style={{color: 'var(--alligator-gold)'}}>
          {id.replace(/-/g, ' ').toUpperCase()}
        </h1>
        <div className="about-card" style={{margin: '50px auto', maxWidth: '800px'}}>
          <h4 style={{color: 'var(--blood-red)'}}>RESEARCH_LOG_001</h4>
          <p style={{color: 'black', marginTop: '20px'}}>
            This is the deep-dive research for <strong>{id}</strong>. 
            (Paste your full project text here!)
          </p>
        </div>
      </main>
    </div>
  );
}

export default ProjectPage;
