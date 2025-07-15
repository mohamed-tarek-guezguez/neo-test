import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/dashboard" className="home-link">
          Go to Homepage
        </Link>
      </div>
    </div>
  )
}

export default NotFound
