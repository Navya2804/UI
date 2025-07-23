import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Stock from "./components/Stock";
import Favorite from "./components/Favorite";
import Wallet from "./components/Wallet";
import Community from "./components/Community";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex bg-gray-100 dark:bg-gray-900 min-h-screen">
        <Router>
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Navbar toggleDark={() => setDarkMode(!darkMode)} />
            <main className="flex-1 p-4 w-full">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/stock" element={<Stock />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/community" element={<Community />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
