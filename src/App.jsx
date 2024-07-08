import NavBar from "./page/navbar/NavBar";
import Footer from "./page/footer/Footer";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="bg-white h-[100vh]">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
