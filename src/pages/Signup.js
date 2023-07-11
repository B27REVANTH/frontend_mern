import React, { useState } from 'react';
import '../styles/Signup.css';
import { useSignup } from '../hooks/useSignup';
import { useLogin } from '../hooks/useLogin';

const Signup = () => {
  const [loginn, setLogin] = useState(false);
  const { signup, signerror } = useSignup();
  const { login } = useLogin();

  const [fullName, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(null);

  const [loginEmail, setLoginEmail] = useState();
  const [loginPass, setLoginPass] = useState();

  const currentDate = new Date();
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const seconds = currentDate.getSeconds().toString().padStart(2, '0');
  const milliseconds = currentDate
    .getMilliseconds()
    .toString()
    .padStart(3, '0');
  const _id = `QzID${hours}${minutes}${seconds}${milliseconds}`;

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(_id, fullName, email, password, role);

    await signup(_id, fullName, email, password, role);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    await login(loginEmail, loginPass);
  };

  return (
    <div className="Login-Container">
      <section className={`wrapper ${loginn ? 'active' : ''}`}>
        <div className="form signup">
          <header onClick={() => setLogin(!loginn)}>Signup</header>
          {signerror && <p>{signerror}</p>}
          <form action="#">
            <input
              type="text"
              placeholder="Full name"
              required
              onChange={(e) => setFullname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email address"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="checkbox"></div>
            <div className="radio-buttons">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  required
                  onChange={() => setRole(1)}
                />
                Admin
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="user"
                  required
                  onChange={() => setRole(0)}
                />
                User
              </label>
            </div>
            <div className="Signup" value="Signup" onClick={handleSignup}>
              Signup
            </div>
          </form>
        </div>

        <div className="form login">
          <header onClick={() => setLogin(!loginn)}>Login</header>
          <form action="#">
            <input
              type="text"
              placeholder="Email address"
              required
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setLoginPass(e.target.value)}
            />
            <p>Forgot password?</p>
            <div className="Signup" value="Signup" onClick={handleLogin}>
              Login
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Signup;
