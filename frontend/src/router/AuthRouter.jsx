import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/Login'; 

export default function AuthRouter() {
  return (
    <Routes>
      
      <Route path="/login" element={<LoginPage />} />

      
    </Routes>
  );
}
