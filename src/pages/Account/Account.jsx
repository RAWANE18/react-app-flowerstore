

import { useState } from 'react';
import './Account.css'; 
import { Link } from 'react-router-dom';

const Account= () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Signing in:", { username, password });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    
    console.log("Signing up:", { username, password, email});
  };

  return (
    <div className="row">
      <div className="col-md-6 mx-auto p-0">
        <div className="card">
          <div className="login-box">
            <div className="login-snip">
              <input
                id="tab-1"
                type="radio"
                name="tab"
                className="sign-in"
                checked={isSignIn}
                onChange={() => setIsSignIn(true)}
              />
              <label htmlFor="tab-1" className="tab">Login</label>
              <input
                id="tab-2"
                type="radio"
                name="tab"
                className="sign-up"
                checked={!isSignIn}
                onChange={() => setIsSignIn(false)}
              />
              <label htmlFor="tab-2" className="tab">Sign Up</label>
              <div className="login-space">
                {isSignIn ? (
                  <div className="login">
                    <form onSubmit={handleSignIn}>
                      <div className="group">
                        <label htmlFor="user" className="label">Username</label>
                        <input
                          id="user"
                          type="text"
                          className="input"
                          placeholder="Enter your username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="pass" className="label">Password</label>
                        <input
                          id="pass"
                          type="password"
                          className="input"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="group">
                        <input id="check" type="checkbox" className="check" />
                        <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
                      </div>
                      <div className="group">
                        <Link to={'/home'} className="button" value="Sign In" >Sing In</Link>
                      </div>
                      <div className="hr"></div>
                      <div className="foot">
                        <a href="#">Forgot Password?</a>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div className="sign-up-form">
                    <form onSubmit={handleSignUp}>
                      <div className="group">
                        <label htmlFor="user-signup" className="label">Username</label>
                        <input
                          id="user-signup"
                          type="text"
                          className="input"
                          placeholder="Create your Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="pass-signup" className="label">Password</label>
                        <input
                          id="pass-signup"
                          type="password"
                          className="input"
                          placeholder="Create your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="email" className="label">Email Address</label>
                        <input
                          id="email"
                          type="text"
                          className="input"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="group">
                      <Link to={'/home'} className="button"  value="Sign Up" >Sign Up</Link>
                      </div>
                      <div className="hr"></div>
                      <div className="foot">
                        <label htmlFor="tab-1">Already Member?</label>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;