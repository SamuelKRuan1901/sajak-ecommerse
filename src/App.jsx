import { useState } from 'react';
import Header from '@components/Header';
import MainLayout from '@components/Layout';
import Footer from '@components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainLayout>
        <Header />
        Content
        <Footer />
      </MainLayout>
    </>
  );
}

export default App;
