import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Admin = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const backendUrl = 'http://localhost:3000/api/';
  const backendUrl = 'https://rcbproject.onrender.com/api/';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    const authToken = sessionStorage.getItem('authToken');
    if (authToken) {
      fetchBookings();
    }
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(`${backendUrl}bookings`);
      setBookings(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${backendUrl}booking/${id}`);
      setBookings(bookings.filter(booking => booking._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@123' && password === 'A123') {
      sessionStorage.setItem('authToken', 'true');
      fetchBookings();
      setLoginError('');
    } else {
      setLoginError('Invalid credentials');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('authToken');
    setBookings([]);
    setEmail('');
    setPassword('');
  };

  if (!sessionStorage.getItem('authToken')) {
    return (
      <div className="login-container" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}>
        <div className="card" style={{
          width: '100%',
          maxWidth: '450px',
          border: 'none',
          borderRadius: '15px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
          overflow: 'hidden'
        }}>
          <div className="card-header" style={{
            background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
            color: 'white',
            textAlign: 'center',
            padding: '25px',
            borderBottom: 'none'
          }}>
            <h2 style={{ margin: 0 }}>Admin Portal</h2>
            <p style={{ opacity: 0.8, marginBottom: 0 }}>Enter your credentials</p>
          </div>
          <div className="card-body" style={{ padding: '30px' }}>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid #e0e0e0'
                  }}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                  type="password" 
                  className="form-control" 
                  id="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid #e0e0e0'
                  }}
                />
              </div>
              {loginError && (
                <div className="alert alert-danger" style={{
                  borderRadius: '8px',
                  padding: '12px',
                  marginBottom: '20px'
                }}>
                  {loginError}
                </div>
              )}
              <button 
                type="submit" 
                className="btn w-100" 
                style={{
                  background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
                  color: 'white',
                  padding: '12px',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: '600',
                  fontSize: '16px',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => e.target.style.opacity = 0.9}
                onMouseOut={(e) => e.target.style.opacity = 1}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  if (error) return (
    <div className="alert alert-danger my-5 mx-auto" style={{ maxWidth: '800px' }}>
      Error: {error}
    </div>
  );

  return (
    <div className="container-fluid" style={{ padding: '0' }}>
      <style>{`
        .admin-header {
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          color: white;
          padding: 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
        }
        .admin-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 10% 20%, rgba(255,255,255,0.1) 0%, transparent 70%);
        }
        .table-responsive {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.08);
          margin-bottom: 3rem;
          width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          border: 1px solid #f0f0f0;
        }
        .table {
          min-width: 700px;
          width: 100%;
          margin-bottom: 0;
        }
        .table thead {
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          color: white;
        }
        .table th {
          padding: 12px;
          font-weight: 500;
          white-space: nowrap;
        }
        .table td {
          padding: 10px 12px;
          vertical-align: middle;
          white-space: nowrap;
        }
        .table tbody tr {
          transition: all 0.2s;
        }
        .table tbody tr:hover {
          background-color: rgba(106, 17, 203, 0.05);
          transform: translateY(-1px);
        }
        .delete-btn {
          padding: 6px 12px;
          border-radius: 6px;
          font-weight: 500;
          transition: all 0.2s;
          font-size: 0.875rem;
        }
        .total-count {
          font-weight: bold;
          color: #2575fc;
          font-size: 1.1em;
        }
        .no-bookings {
          text-align: center;
          padding: 2rem;
          background-color: #f8f9fa;
          border-radius: 12px;
          margin: 2rem 0;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        .refresh-btn {
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          border: none;
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 500;
          transition: all 0.3s;
          font-size: 0.875rem;
        }
        .refresh-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(106, 17, 203, 0.3);
        }
        .logout-container {
          text-align: center;
          margin-top: 2rem;
          padding: 2rem 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }
        .logout-btn {
          background: transparent;
          color: #6a11cb;
          border: 2px solid #6a11cb;
          padding: 8px 24px;
          border-radius: 8px;
          font-weight: 500;
          transition: all 0.3s;
          font-size: 0.875rem;
        }
        .logout-btn:hover {
          background: #6a11cb;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(106, 17, 203, 0.2);
        }

        /* Mobile-specific styles */
        @media (max-width: 768px) {
          .admin-header {
            padding: 1.5rem;
          }
          .admin-header h1 {
            font-size: 1.8rem;
          }
          .admin-header p {
            font-size: 1rem;
          }
          .container {
            padding-left: 15px;
            padding-right: 15px;
          }
          .d-flex.justify-content-between {
            flex-direction: column;
            gap: 1rem;
          }
          .refresh-btn, .logout-btn {
            width: 100%;
          }
          .table-responsive::-webkit-scrollbar {
            height: 6px;
          }
          .table-responsive::-webkit-scrollbar-thumb {
            background: rgba(106, 17, 203, 0.5);
            border-radius: 3px;
          }
          .table-responsive::-webkit-scrollbar-track {
            background: rgba(106, 17, 203, 0.1);
          }
        }
      `}</style>

      <div className="admin-header">
        <div className="container">
          <h1 className="mb-2" style={{ fontWeight: '700', fontSize: '2.5rem' }}>Booking Management</h1>
          <p className="mb-0" style={{ fontSize: '1.1rem', opacity: 0.9 }}>View and manage all customer bookings</p>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 style={{ fontSize: '1.2rem' }}>
            Total Bookings: <span className="total-count">{bookings.length}</span>
          </h5>
          <button 
            className="btn text-white refresh-btn"
            onClick={fetchBookings}
          >
            <i className="bi bi-arrow-clockwise me-2"></i> Refresh Data
          </button>
        </div>

        {bookings.length === 0 ? (
          <div className="no-bookings">
            <h4 style={{ color: '#6a11cb', marginBottom: '1rem' }}>No bookings found</h4>
            <p style={{ color: '#666' }}>There are currently no bookings in the system.</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Destination</th>
                  <th>Total Passengers</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={booking._id}>
                    <td>{index + 1}</td>
                    <td>{booking.name}</td>
                    <td>{booking.email}</td>
                    <td>{booking.mobile}</td>
                    <td>{booking.destination}</td>
                    <td>{booking.total.toLocaleString()}</td>
                    <td>{formatDate(booking.date)}</td>
                    <td>
                      <button 
                        className="btn btn-sm btn-danger delete-btn"
                        onClick={() => handleDelete(booking._id)}
                      >
                        <i className="bi bi-trash me-1"></i> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="logout-container">
          <button 
            className="logout-btn"
            onClick={handleLogout}
          >
            <i className="bi bi-box-arrow-right me-2"></i> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;