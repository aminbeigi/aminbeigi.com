import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <h1 className="text-9xl font-bold text-primary-white tracking-tighter">
        404
      </h1>
      <p className="text-2xl text-text-grey mt-4">Page Not Found</p>
      <p className="text-text-grey mt-2">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 text-accent-purple hover:underline transition-colors"
      >
        &larr; Back to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
