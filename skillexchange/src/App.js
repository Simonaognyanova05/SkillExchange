import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Details from "./components/Details";
import Login from "./components/Login";
import Order from "./components/Order";
import Register from "./components/Register";
import Create from "./components/Create";



function App() {
  return (
    <div class="page" role="document">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/create" element={<Create/>} />
          <Route path="/details" element={<Details/>} />


        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
