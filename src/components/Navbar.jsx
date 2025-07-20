import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold">AR Ad Campaign</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}
