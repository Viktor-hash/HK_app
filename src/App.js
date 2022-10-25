import "./styles.css";
import Navbar from "./Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
