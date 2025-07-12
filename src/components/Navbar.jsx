import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md">
      <div className="flex gap-4">
        <Link to="/" className="text-blue-600 font-semibold">🏠 Home</Link>
        <Link to="/ask" className="text-blue-600 font-semibold">❓ Ask</Link>
      </div>
      <button className="text-gray-600 text-xl">🔔</button>
    </nav>
  );
};

export default Navbar;
