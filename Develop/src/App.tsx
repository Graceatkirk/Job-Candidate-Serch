import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import CandidateSearch from './pages/CandidateSearch';
import SavedCandidatesComponent from './pages/SavedCandidates';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          {/* Define routes */}
          <Route path="/" element={<CandidateSearch />} />
          <Route path="/saved-candidates" element={<SavedCandidatesComponent savedCandidates={[]} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
