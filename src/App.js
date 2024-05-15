import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserService from "./service/UserService";
import LoginPage from './pages/auth/LoginPage';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar/Navbar';
import RegistrationPage from './pages/auth/RegistrationPage';
import AddFood from './service/food/AddFood';
import Food from './pages/Food';
import EditFood from './service/food/EditFood';

function App() {
  const isAuthenticated = UserService.isAuthenticated();
  const isAdmin = UserService.isAdmin();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
          </>
        ) : (
          <>
            {/* Authenticated User Routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/food" element={<Food />} />

            {/* Admin Routes */}
            {isAdmin && (
              <>
                <Route path="/add-food" element={<AddFood />} />
                <Route path="/edit-food/:id" element={<EditFood />} />
              </>
            )}
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
