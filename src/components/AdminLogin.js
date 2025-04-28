import React, { useState} from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


const AdminLogin = () => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password) {
      setError('Both fields are required.');
      return;
    }

    setError('');

    // Simulated login (replace this with your actual auth logic)
    if (username === 'admin1' && password === 'admin1234') {
      alert('Login successful!');
      navigate('/AdminDashboard');
      setShowModal(false);
      setUsername('');
      setPassword('');
    } else {
      setError('Invalid credentials. Try again.');
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      {/* Touch ID Icon */}
      <div
        onClick={() => setShowModal(true)}
        style={{ cursor: 'pointer' }}
        className="text-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="80" width="80">
          <g>
            <path d="M3 12.63a0.88 0.88 0 0 0 -0.88 0.87V23a0.88 0.88 0 0 0 1.76 0v-9.5a0.88 0.88 0 0 0 -0.88 -0.87Z" fill="#000000"></path>
            <path d="M12 1.88a8 8 0 0 1 4.49 1.35 0.88 0.88 0 1 0 1 -1.46A9.89 9.89 0 0 0 2.12 10a0.88 0.88 0 1 0 1.76 0A8.13 8.13 0 0 1 12 1.88Z" fill="#000000"></path>
            <path d="M20.21 4.51A0.87 0.87 0 0 0 19 4.27a0.88 0.88 0 0 0 -0.24 1.22A8.08 8.08 0 0 1 20.12 10v13a0.88 0.88 0 0 0 1.76 0V10a9.85 9.85 0 0 0 -1.67 -5.49Z" fill="#000000"></path>
            <path d="M12 3.13A6.88 6.88 0 0 0 5.12 10v13a0.88 0.88 0 0 0 1.76 0V10a5.12 5.12 0 0 1 10.24 0v6.5a0.88 0.88 0 0 0 1.76 0V10A6.88 6.88 0 0 0 12 3.13Z" fill="#000000"></path>
          </g>
        </svg>
        <div className="mt-2">Click to Login</div>
      </div>

      {/* Bootstrap Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                placeholder="Enter username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="dark" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdminLogin;
