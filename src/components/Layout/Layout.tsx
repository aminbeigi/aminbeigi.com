import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

function Layout() {
  return (
    <div className="bg-background-black min-h-screen">
      <div className="max-w-4xl mx-auto px-8 pt-8 pb-8">
        <NavBar />
        <main className="pt-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
