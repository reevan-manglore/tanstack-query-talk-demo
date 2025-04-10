import { UserAvatar } from '~/components/user-avatar';
import { Outlet, Link } from 'react-router';

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="font-bold text-xl">Feature Requests</div>
            <div className="flex items-center gap-4">
              <Link to="/" className="text-sm font-medium">
                Dashboard
              </Link>
              <Link to="/about-us" className="text-sm font-medium">
                About us
              </Link>
              <Link to="/counter" className="text-sm font-medium">
                Counter
              </Link>
              <UserAvatar />
            </div>
          </nav>
        </div>
      </header>
      <div className="bg-gray-50 min-h-screen  mx-4 p-4 relative">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
