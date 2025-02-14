import { Routes, Route } from 'react-router-dom';
 
import Signup from './components/Signup';
import Login from './components/Login';
 
import DashboardLayoutBasic from './components/Dashboard/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import AuthRoute from './components/AuthRoute';

function App() {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute/>} >
      <Route path="/Dashboard/*" element={<DashboardLayoutBasic />} />
      </Route>
      <Route element={<AuthRoute/>} >
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        </Route>
         
       
      </Routes>
    </>
  );
}

export default App;
