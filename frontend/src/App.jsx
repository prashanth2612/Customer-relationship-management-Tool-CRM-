import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const IdurarOs = lazy(() => import('./apps/IdurarOs'));

export default function RoutApp() {
  return (
    <BrowserRouter>
      <Provider >
        <Suspense >
          <IdurarOs />
        </Suspense>
      </Provider>
    </BrowserRouter>
  );
}
