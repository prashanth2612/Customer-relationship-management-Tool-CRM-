import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/Login'; 
import { useDispatch } from 'react-redux';
export default function AuthRouter() {
  const dispatch = useDispatch();
  return (
    <Routes>
      
      <Route path="/login" element={<LoginPage />} />

      
    </Routes>
  );
}
