import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Profile from "./Components/Profile";
import Header from "./Components/Header";
function App() {
  return <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/signin" element={<SignIn/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
    </Routes>
  </BrowserRouter>
}

export default App;
