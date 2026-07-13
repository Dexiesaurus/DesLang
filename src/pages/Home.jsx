import '../App.css';
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';

function Home() {
  return (
    <div className="site-wrapper">
      <NavBar />
      
      <section id="hero">
        <div className="hero-content">
          <h1>DESTINI LANG</h1>
          <p className="subtitle">UX RESEARCHER // INCLUSIVE DESIGNER // CHICAGO BASED </p>
        </div>
      </section>

    <section id="about" className="about-container">
  <div className="about-card">
    <div className="about-header">
      <div className="profile-photo-wrapper">
        <img src="/DesLang/profilepicv1.jpeg" alt="Destini Lang" className="profile-photo" />
        <div className="photo-accent"></div>
        <div className="paper-clip"></div>
      </div>
      <div className="about-intro">
        <h2 className="display-name">Destini<br/><span>Lang</span></h2>
        <p className="job-title">INCLUSIVE DESIGNER</p>
      </div>
    </div>

    <div className="about-content">
      {/* LEFT COLUMN: Education, Contact, Volunteering */}
      <div className="about-left">
        <div className="info-block">
          <h4>EDUCATION</h4>
          <p><strong>2024-2026</strong><br/>MS in Human-Computer Interaction</p>
          <p><strong>2022-2025</strong><br/>BS in User Experience Design</p>
        </div>
        
        <div className="info-block">
          <h4>CONTACT</h4>
          <p>Chicago, IL</p>
          <p>Lang.Destini@yahoo.com</p>
        </div>

        <div className="info-block">
          <h4>VOLUNTEERING</h4>
          <ul className="vol-list">
            <li>Digital Literacy Counselor</li>
            <li>Chicago Food Pantry Volunteer</li>
          </ul>
        </div>
      </div>

      {/* RIGHT COLUMN: Bio & Skills */}
      <div className="about-right">
        <h4>EXPERIENCE</h4>
        <p>
          Specializing in high-fidelity user research and digital anthropology. 
          I bridge the gap between feral human emotion and clinical digital precision. 
          My work sits at the intersection of rigorous research methodology and human-centered design.
        </p>
        
        <div className="skills-tags">
          <span className="tag">User Research</span>
          <span className="tag">Visual Design</span>
          <span className="tag">HCI</span>
          <span className="tag">Content Management System</span>
        </div>
      </div>
    </div>
  </div>
</section>


      <main id="research">
        <h2 className="section-title">SELECTED_WORKS</h2>
        <div className="grid">
          <ProjectCard id="notion-research" title="Notion Research" description="Exploring information retrieval in Notion." />
          <ProjectCard id="tool-library" title="Chicago Tool Library" description="Usability research for community tools." />
          <ProjectCard 
  id="local-ecommerce" 
  title="Local E-Commerce" 
  description="Investigating how small, Chicago-based businesses can compete in digital retail." 
/>


          <ProjectCard id="jarvis-lab" title="Jarvis Lab Website" description="Research lab web presence." />
        </div>
      </main>

      <footer><p>© 2026 DESTINI LANG. ALL RIGHTS RESERVED.</p></footer>
    </div>
  );
}

export default Home;
