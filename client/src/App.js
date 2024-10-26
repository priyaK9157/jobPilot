import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./index.css"
import CreateAcc from './pages/Createacc';
import SignIn from './pages/signin';
import Homepage from './pages/Homepage';
import Emailverification from './pages/emailverification';
import Signin from "../src/pages/signin"
import Forgetpassword from "../src/pages/forgetpaaword"
import ResetPassword from "../src/pages/resetpassword"
import Dashboard from "../src/pages/Dashboard/cadidates/dashboard"
import OTPpage from "../src/pages/emailverification"
import Jobpage from "../src/pages/jobpage/jobpage"
import Jobdetail from "../src/pages/jobpage/jobdetail"
import Edashboard from "../src/pages/Dashboard/employers/Edashboard"
import { Toaster } from 'react-hot-toast';


const App = () => {
  return (

    <>
      <Toaster/>
    <Routes>

       <Route path='/dashboard' element={<Dashboard/>}/>
       <Route path="/" element={<Homepage />} /> 
       <Route path="/create-account" element={<CreateAcc />} />
      <Route path="/emailverification" element={<Emailverification />} /> 
       <Route path="/signin" element={<SignIn />} />
      <Route path="/otp" element={<OTPpage />} />
      <Route path="/forget-password" element={<Forgetpassword/>}/>
      <Route path="/reset-password" element={<ResetPassword/>}/> 
      <Route path='/jobpage' element={<Jobpage/>} />
      <Route path='/job/:jobId' element={<Jobdetail />} />
      <Route path='/emp-dashboard' element={<Edashboard/>} />
      
    </Routes>
    </>
  );
};

export default App;
