import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cars from './pages/Cars';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'cars':
        return <Cars />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'login':
        return <Login />;
      case 'profile':
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
    </div>
  );
}

export default App;