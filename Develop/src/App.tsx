import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import CandidateSearch from './pages/CandidateSearch';
import SavedCandidates from './pages/SavedCandidates';

function App() {
  return (
    <Router>
      <Nav />
      <main>
        <Routes>
          {/* Define routes */}
          <Route path="/" element={<CandidateSearch />} />
          <Route path="/saved" element={<SavedCandidates savedCandidates={[]} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
