import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

function Layout() {
  return (
    <div className="bg-backgroundBlack min-h-screen">
      <div className="max-w-4xl mx-auto p-8">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
