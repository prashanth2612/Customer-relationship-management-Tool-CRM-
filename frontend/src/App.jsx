// import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthRouter from './router/AuthRouter';

export default function RoutApp() {
  return (
    <BrowserRouter>
      <AuthRouter />
    </BrowserRouter>
  );
}
