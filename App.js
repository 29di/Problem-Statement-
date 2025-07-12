import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import AskQuestion from './pages/AskQuestion';
import QuestionDetails from './pages/QuestionDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ask" element={<AskQuestion />} />
        <Route path="/question/:id" element={<QuestionDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
