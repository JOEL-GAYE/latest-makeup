import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Header from './components/Header';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './Pages/AdminDashboard';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  return (
    <Router>
      <div>
        <Header />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Adminlogin"
            element={<AdminLogin setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/AdminDashboard"
            element={
              isAuthenticated ? <AdminDashboard /> : <Navigate to="/Adminlogin" replace />
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
