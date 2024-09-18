import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import Loading from './components/Loading';

// const IdurarOs = lazy(() => import('./apps/IdurarOs'));
const Login = lazy(()=>import('./pages/Login'))
export default function RoutApp() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<Loading />}>
          <Login/>
        </Suspense>
      </Provider>
    </BrowserRouter>
  );
}