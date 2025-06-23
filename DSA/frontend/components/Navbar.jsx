import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-100 border-b shadow flex justify-between items-center">
      <h1 className="text-xl font-bold">DSA Prep</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/topics" className="hover:underline">Topics</Link>
        <Link to="/practice" className="hover:underline">Practice</Link>
      </div>
    </nav>
  );
}
