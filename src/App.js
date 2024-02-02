import "./App.css";
import profile from "./assets/profile.png";
import { Outlet } from "react-router-dom";
import RouteTest from "./components/RouteTest";

function App() {
  return (
    <div className="App">
      <header className="App-header">테스트입니다</header>
      <img src={profile} alt="Profile" className="profile" />
      <Outlet />
      <br />
      <RouteTest />
    </div>
  );
}

export default App;
