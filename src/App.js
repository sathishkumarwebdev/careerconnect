import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import FindJob from "./pages/FindJob";
import { ToastContainer } from "react-toastify";
import UserProvider from "./provider/UserProvider"

function App() {
  return (
    <>
    UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/findjob" element={<FindJob />} />
        <ToastContainer  />
      </Routes>
    </>
  );
}

export default App;
