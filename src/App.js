import { Suspense } from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Header from "./components/nav/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
function App() {
  return (
    <Suspense fallback={null}>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  </Suspense>
  );
}

export default App;
