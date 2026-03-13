import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import LocalEcommerce from './pages/LocalEcommerce'; // Import the new page


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/local-ecommerce" element={<LocalEcommerce />} />
        {/* Your other routes... */}
      </Routes>
    </Router>
  );
}

export default App;
