// import logo from './logo.svg';
// import './App.css';
// import Header from './components/Header';
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
// import Listing from './pages/Listing';
// import Details from './pages/details';
import Login from "./pages/Login";
import OtpCode from "./pages/OtpCode";
import Landing from "./pages/Landing";
import Analytics from "./pages/Analytics";
import Feed from "./pages/Feed";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/feed" element={<Feed />} />
        </Route>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OtpCode />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
