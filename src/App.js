import './styles/App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

/** import components */
import Main from './components/Main';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { CheckUserExist } from './helper/helper';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';

import { UseAuthContext } from './hooks/useAuthContext';

function App() {
  const { user } = UseAuthContext();
  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <Dashboard /> : <Navigate to="/Signup" />}
        />
        <Route
          path="/Signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
        <Route path="/quiz-home" element={<Main />} />
        <Route
          path="/quiz"
          element={
            <CheckUserExist>
              <Quiz />
            </CheckUserExist>
          }
        />
        <Route
          path="/result"
          element={
            <CheckUserExist>
              <Result />
            </CheckUserExist>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
