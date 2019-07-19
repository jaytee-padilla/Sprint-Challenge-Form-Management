import React from 'react';
import { Route, Link } from 'react-router-dom';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import FriendsList from './components/ProtectedRoute';

function App() {
  return (
    <div className="App" style={{padding: "30px"}}>
			<div className="nav">
				<Link to="/" className="btn" style={{marginRight: "20px", textDecoration: "none"}}>Login</Link>
				<Link to="/profile" className="btn" style={{marginRight: "20px", textDecoration: "none"}}>Friends</Link>
				{localStorage.getItem('token') && <Link to="/friends/add" className="btn" style={{textDecoration: "none"}}>Add Friends</Link>}
			</div>

			{/* Login Route */}
      <Route exact path="/" component={Login} />
			
			{/* Protected Route */}
			<ProtectedRoute path="/friends" component={FriendsList} />
    </div>
  );
}

export default App;
