import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routers } from '@/routers/routers';
import { Suspense } from 'react';
import { SideBarProvider } from '@/contexts/SideBarProvider';
import SideBar from '@components/SideBar';
import { ToastProvider } from '@/contexts/ToastProvider';
import { StoreProvider } from '@/contexts/StoreProvider';

function App() {
  return (
    <StoreProvider>
      <ToastProvider>
        <BrowserRouter>
          <SideBarProvider>
            <SideBar />
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                {routers.map((item, index) => (
                  <Route
                    key={index}
                    path={item.path}
                    element={<item.component />}
                  />
                ))}
              </Routes>
            </Suspense>
          </SideBarProvider>
        </BrowserRouter>
      </ToastProvider>
    </StoreProvider>
  );
}

export default App;
