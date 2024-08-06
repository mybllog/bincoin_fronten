import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Signup';
import Verify from './Pages/Verify';
import Confirm from './Pages/Confirm';
import Sample from './DashboardLayout/sample-page/samplePage'
import Samples from './DashboardLayout/sample-page/Sample'
import Deposit from './DashboardLayout/sample-page/Deposit';
import Withdraw from './DashboardLayout/sample-page/Withdraw';
import History from './DashboardLayout/sample-page/depositHistory';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/verify" element={<Verify/>} />
        <Route path = "/samples" element={<Sample/>}/>
        <Route path = "/sample" element={<Samples/>}/>
        <Route path='/deposit' element= {<Deposit/>}/>
        <Route path = "/withdraw" element={<Withdraw/>}/>
        <Route path = "/confirm" element={<Confirm/>}/>
        <Route path = "/depositHistory" element={<History/>}/>
      </Routes>
    </Router>
  );
}

export default App;
