import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LogInPage from "./LogInPage";
import SignInPage from "./SignInPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <SignIn /> */}
        <Route path="/signin" element={<SignInPage />} />
        {/* <LogIn /> */}
        <Route path="/" element={<LogInPage />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
