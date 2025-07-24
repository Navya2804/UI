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
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <div className="flex w-screen h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
          <Sidebar />
          <div className="flex flex-col flex-1 w-full overflow-hidden">
            <Navbar toggleDark={() => setDarkMode(!darkMode)} />
            <main className="flex-1 w-full p-4 overflow-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/budgeting" element={<Stock />} />
                <Route path="/planning" element={<Favorite />} />
                <Route path="/inclusion" element={<Wallet />} />
                <Route path="/goals" element={<Community />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
