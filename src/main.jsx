import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Layout from "./Pages/Layout";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Project from "./Pages/Project";
import NotFound from "./Pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route path="/my-all-projects" element={<Project />}/>
         <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);