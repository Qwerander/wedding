import { Outlet, useNavigate } from 'react-router-dom';
import { ProgressBar } from './components/progressBar/ProgressBar';
import { Layout } from './components/layout/Layout';
import { useEffect } from 'react';

export function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('tables');
  }, [navigate]);

  return (
    <Layout>
      <ProgressBar />
      <Outlet />
    </Layout>
  );
}
