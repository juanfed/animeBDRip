import './App.css';
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header /> 
    <Outlet /> {/* Aca se rendirazar√° las paginas y todas tendran el mismo header y footer */}
    <Footer />
    </>
  );
}

export default App;
