import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import AskQuestion from './pages/AskQuestion'; // ✅ check path: likely in /pages
import QuestionDetails from './pages/QuestionDetails'; // ✅ check path: likely in /pages

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ask" element={<AskQuestion />} />
          <Route path="/question/:id" element={<QuestionDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
