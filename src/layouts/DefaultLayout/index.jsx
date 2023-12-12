import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/index.jsx';

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

